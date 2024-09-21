import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import styled, { css, keyframes } from "styled-components";

export const SideMenu = ({ sideMenuOpened, setSideMenuOpened }) => {
  const sideMenuRef = useRef();
  const pathname = usePathname();

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        sideMenuOpened &&
        sideMenuRef.current &&
        !sideMenuRef.current.contains(event.target)
      ) {
        setSideMenuOpened(false);
      }
    };

    const handleScroll = () => {
      setSideMenuOpened(false);
    };

    document.addEventListener("click", handleDocumentClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sideMenuOpened]);

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
    <DisplayWrapper ref={sideMenuRef} sideMenuOpened={sideMenuOpened}>
      <RoutesWrapper>
        {routesData.map((route, index) => (
          <NotchedBox
            key={index}
            href={route.path}
            className={pathname === route.path && "active"}
          >
            <Route sideMenuOpened={sideMenuOpened}>
              <span>{route.label}</span>
            </Route>
          </NotchedBox>
        ))}
      </RoutesWrapper>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  display: none;
  width: 50%;
  height: 100vh;
  background-color: #11111a;
  border-left: 1px solid #00fa55;
  padding: 1rem;
  position: fixed;
  top: 0;
  right: ${(props) => (props.sideMenuOpened ? "0px" : "-400px")};
  z-index: 1;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    display: initial;
  }
`;

const RoutesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  height: 100%;
  transition: all 0.5s ease-in-out;
`;

const chitchat = keyframes`
  0% { content: "#"; }
  5% { content: "."; }
  10% { content: "^{"; }
  15% { content: "-!"; }
  20% { content: "#$_"; }
  25% { content: "№:0"; }
  30% { content: "#{+.";}
  35% { content: "@}-?"; }
  40% { content: "?{4@%"; }
  45% { content: "=.,^!"; }
  50% { content: "?2@%"; }
  55% { content: "\\;1}]";  right: 0;}
  60% { content: "?{%:%"; right: 0; }
  65% { content: "|{f[4"; right: 0; }
  70% { content: "{4%0%"; right: 0; }
  75% { content: "'1_0<"; right: 0; }
  80% { content: "{0%"; right: 0; }
  85% { content: "]>'"; right: 0;}
  90% { content: "4"; right: 0;}
  95% { content: "2"; right: 0; }
  100% { content: ""; right: 0;}
`;

const Route = styled.p`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px 0 35px;
  background-color: #0f1c1e;
  border: 1px solid
    ${({ theme }) =>
      theme.currentTheme === "dark"
        ? theme.globalColors.darkGreenColor
        : theme.globalColors.darkGreenColor};
  clip-path: polygon(30px 0, 100% 0, 100% 100%, 100% 100%, 0 100%, 0 30px);
  transition: 0.3s;
  overflow: hidden;

  span {
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: 0.3s;
    position: relative;
    background: inherit;
  }

  span::before {
    position: absolute;
    content: "";
    background: inherit;
  }

  span::before,
  span::before {
    animation: ${(props) =>
      props.sideMenuOpened
        ? css`
            ${chitchat} linear both 1.2s
          `
        : ""};
  }
`;

const NotchedBox = styled(Link)`
  width: 100%;
  height: auto;
  margin: 0 auto;
  position: relative;
  color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.globalColors.whiteColor
      : theme.globalColors.whiteColor};
  text-decoration: none;
  overflow: hidden;

  &.active {
    ${Route} {
      background-color: #185b33;
    }
  }

  &::before {
    content: "";
    position: absolute;
    margin: -15px;
    width: 30px;
    height: 30px;
    transform: rotate(45deg);
    background-color: #00fa55;
  }
`;
