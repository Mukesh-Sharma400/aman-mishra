import Link from "next/link";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { uiState } from "../redux/uiSlice";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  const { theme } = useSelector(uiState);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sectionData = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/education", label: "Education" },
    { path: "/experience", label: "Experience" },
    { path: "/reviews", label: "Reviews" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <DisplayWrapper scrolled={scrolled}>
      <ContentWrapper scrolled={scrolled}>
        <Logo></Logo>
        <RoutesWrapper>
          {sectionData.map((route, index) => (
            <Routes
              key={index}
              href={route.path}
              className={`${
                pathname === route.path || pathname.startsWith(route.path + "/")
                  ? "active"
                  : ""
              }`}
            >
              {route.label}
            </Routes>
          ))}
        </RoutesWrapper>
      </ContentWrapper>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: #11111a;
  position: fixed;
  top: 0;
  z-index: 10;
  border-bottom: ${(props) => (props.scrolled ? "1px solid #00FA55" : "none")};
  transition: all 0.5s ease-in-out;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #11111a;
  max-width: 1100px;
  margin: 0 auto;
  border-bottom: ${(props) => (props.scrolled ? "1px solid #00FA55" : "none")};
  transition: all 0.5s ease-in-out;
`;

const Logo = styled.div`
  transition: all 0.5s ease-in-out;
`;

const RoutesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.5s ease-in-out;
`;

const Routes = styled(Link)`
  position: relative;
  font-size: 18px;
  text-decoration: none;
  color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.globalColors.darkGrayColor
      : theme.globalColors.darkGrayColor};

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    height: 2px;
    background-color: ${({ theme }) =>
      theme.currentTheme === "dark"
        ? theme.globalColors.darkGrayColor
        : theme.globalColors.darkGrayColor};
    width: 0;
    transform: translateX(-50%);
    transition: width 0.3s ease-in-out, background-color 0.3s ease-in-out;
  }

  &:hover::before {
    width: 60%;
  }

  &.active {
    color: ${({ theme }) =>
      theme.currentTheme === "dark"
        ? theme.globalColors.lightGreenColor
        : theme.globalColors.lightGreenColor};
    font-weight: 600;
    &::before {
      width: 60%;
      background-color: ${({ theme }) =>
        theme.currentTheme === "dark"
          ? theme.globalColors.lightGreenColor
          : theme.globalColors.lightGreenColor};
    }
  }
`;
