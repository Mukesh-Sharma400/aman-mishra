import Link from "next/link";
import { SideMenu } from "./SideMenu";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { uiState } from "../redux/uiSlice";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  const { theme } = useSelector(uiState);
  const [scrolled, setScrolled] = useState(false);
  const [sideMenuOpened, setSideMenuOpened] = useState(false);

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

  const handleSideMenu = () => {
    setSideMenuOpened(!sideMenuOpened);
  };

  const routesData = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/education", label: "Education" },
    { path: "/experience", label: "Experience" },
    { path: "/reviews", label: "Reviews" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <DisplayWrapper scrolled={scrolled}>
        <ContentWrapper scrolled={scrolled}>
          <Logo></Logo>
          <RoutesWrapper>
            {routesData.map((route, index) => (
              <Routes
                key={index}
                href={route.path}
                className={`${
                  pathname === route.path ||
                  pathname.startsWith(route.path + "/")
                    ? "active"
                    : ""
                }`}
              >
                {route.label}
              </Routes>
            ))}
          </RoutesWrapper>
          <Button onClick={handleSideMenu} sideMenuOpened={sideMenuOpened}>
            <div className="bar bar--1"></div>
            <div className="bar bar--2"></div>
            <div className="bar bar--3"></div>
          </Button>
        </ContentWrapper>
      </DisplayWrapper>
      <SideMenu
        sideMenuOpened={sideMenuOpened}
        setSideMenuOpened={setSideMenuOpened}
      />
    </>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: #11111a;
  position: fixed;
  top: 0;
  z-index: 2;
  border-bottom: ${(props) => (props.scrolled ? "1px solid #00FA55" : "none")};
  transition: all 0.5s ease-in-out;

  @media (max-width: 1100px) {
    padding: 0px 10px;
  }
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

  @media (max-width: 768px) {
    display: none;
  }
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

const Button = styled.button`
  padding: 0;
  --gap: 5px;
  --height-bar: 3px;
  --pos-y-bar-one: 0;
  --pos-y-bar-three: 0;
  --scale-bar: 1;
  --rotate-bar-one: 0;
  --rotate-bar-three: 0;

  display: none;

  @media (max-width: 768px) {
    display: flex;
  }

  width: 35px;
  min-width: 35px;
  max-width: 35px;
  flex-direction: column;
  gap: var(--gap);
  cursor: pointer;
  position: relative;
  background: transparent;

  .bar {
    position: relative;
    height: var(--height-bar);
    width: 100%;
    border-radius: 0.5rem;
    background-color: #00fa55;
  }

  .bar--1 {
    top: var(--pos-y-bar-one);
    transform: rotate(var(--rotate-bar-one));
    transition: top 200ms 100ms, transform 100ms;
  }

  .bar--2 {
    transform: scaleX(var(--scale-bar));
    transition: transform 150ms 100ms;
  }

  .bar--3 {
    bottom: var(--pos-y-bar-three);
    transform: rotate(var(--rotate-bar-three));
    transition: bottom 200ms 100ms, transform 100ms;
  }

  ${(props) =>
    props.sideMenuOpened &&
    `
    --pos-y-bar-one: calc(var(--gap) + var(--height-bar));
    --pos-y-bar-three: calc(var(--gap) + var(--height-bar));
    --scale-bar: 0;
    --rotate-bar-one: 45deg;
    --rotate-bar-three: -45deg;
  `}
`;
