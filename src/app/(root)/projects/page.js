"use client";

import Image from "next/image";
import styled from "styled-components";
import BaseLayout from "@/app/components/BaseLayout";
import { PageHeading } from "@/app/components/PageHeading";
import gymManagement from "../../../../public/assets/gymmanagement.jpg";

export default function Projects() {
  const projectsData = [
    {
      name: "Gym Management System",
      imageSrc: gymManagement,
      alt: "Gym Management System",
      period: "Feb 2024 - March 2024",
      content:
        "Developed a dynamic website using HTML, CSS, JSP, and Java, integrated with a real-time MySQL database. The site enhanced user experience by streamlining the membership process, efficiently managing member records, and providing information on trainers and membership plans. This project involved optimizing the front-end for ease of navigation and implementing a robust backend to support real-time data access and updates.",
    },
  ];

  return (
    <BaseLayout>
      <DisplayWrapper>
        <PageHeading heading="Projects" />
        <ProjectsWrapper>
          {projectsData.map((project, index) => (
            <SmallNotchedBox key={index}>
              <ProjectWrapper>
                <LeftSide data-aos="fade-left">
                  <ProjectImage
                    src={project.imageSrc}
                    alt={project.alt}
                    width={150}
                    height={150}
                  />
                </LeftSide>
                <RightSide>
                  <ProjectName>
                    {project.name} <span>[{project.period}]</span>
                  </ProjectName>
                  <Content>{project.content}</Content>
                </RightSide>
              </ProjectWrapper>
            </SmallNotchedBox>
          ))}
        </ProjectsWrapper>
      </DisplayWrapper>
    </BaseLayout>
  );
}

const DisplayWrapper = styled.div`
  width: 100%;
  transition: all 0.5s ease-in-out;
`;

const ProjectsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 30px;
  transition: all 0.5s ease-in-out;
`;

const SmallNotchedBox = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    margin: -40px;
    width: 80px;
    height: 80px;
    transform: rotate(45deg);
    background-color: #00fa55;
  }
`;

const ProjectWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  padding: 50px 30px;
  background-color: #0f1c1e;
  border: 1px solid
    ${({ theme }) =>
      theme.currentTheme === "dark"
        ? theme.globalColors.darkGreenColor
        : theme.globalColors.darkGreenColor};
  clip-path: polygon(
    70px 0,
    100% 0,
    100% 100%,
    calc(100% - 70px) 100%,
    0 100%,
    0 70px
  );
  transition: all 0.5s ease-in-out;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  width: 20%;
  position: relative;
  transition: all 0.5s ease-in-out;
`;

const ProjectImage = styled(Image)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  clip-path: polygon(
    20% 0%,
    80% 0%,
    100% 20%,
    100% 80%,
    80% 100%,
    20% 100%,
    0% 80%,
    0% 20%
  );
  padding: 5px;
  border: 2px solid
    ${({ theme }) =>
      theme.currentTheme === "dark"
        ? theme.globalColors.lightGreenColor
        : theme.globalColors.lightGreenColor};
  transition: all 0.5s ease-in-out;

  @media (max-width: 600px) {
    position: initial;
    transform: initial !important;
  }
`;

const RightSide = styled.div`
  width: 80%;
  transition: all 0.5s ease-in-out;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const ProjectName = styled.p`
  font-size: 18px;
  margin-bottom: 10px !important;
  color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.globalColors.whiteColor
      : theme.globalColors.whiteColor};
  transition: all 0.5s ease-in-out;

  span {
    color: ${({ theme }) =>
      theme.currentTheme === "dark"
        ? theme.globalColors.lightGrayColor
        : theme.globalColors.lightGrayColor};
  }
`;

const Content = styled.p`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 1px;
  color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.globalColors.lightGrayColor
      : theme.globalColors.lightGrayColor};
  transition: all 0.5s ease-in-out;
`;
