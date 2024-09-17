import styled from "styled-components";
import { useSelector } from "react-redux";
import { uiState } from "../redux/uiSlice";
import { useEffect, useState } from "react";

export const Header = () => {
  const { theme } = useSelector(uiState);
  const [activeSection, setActiveSection] = useState("");

  const sectionData = [
    { path: "#skills", label: "Skills" },
    { path: "#projects", label: "Projects" },
    { path: "#education", label: "Education" },
    { path: "#experience", label: "Experience" },
    { path: "#reviews", label: "Reviews" },
    { path: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = sectionData.map((section) =>
        document.querySelector(section.path)
      );
      let active = "";

      sections.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
            active = sectionData[index].path;
          }
        }
      });

      setActiveSection(active);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <DisplayWrapper>
      <ContentWrapper>
        <Logo></Logo>
        <SectionsWrapper>
          {sectionData.map((section, index) => (
            <Section
              key={index}
              href={section.path}
              className={activeSection === section.path ? "active" : ""}
            >
              {section.label}
            </Section>
          ))}
        </SectionsWrapper>
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
  transition: all 0.5s ease-in-out;
`;

const Logo = styled.div`
  transition: all 0.5s ease-in-out;
`;

const SectionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.5s ease-in-out;
`;

const Section = styled.a`
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
