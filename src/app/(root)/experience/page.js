"use client";

import Image from "next/image";
import styled from "styled-components";
import BaseLayout from "@/app/components/BaseLayout";
import { PageHeading } from "@/app/components/PageHeading";

export default function Experience() {
  const experiencesData = [];

  // const experiencesData = [
  //   {
  //     company: "Playerzpot Media Pvt Ltd",
  //     imageSrc: profilePicture,
  //     alt: "Playerzpot Media Pvt Ltd",
  //     period: "May 2024 - Present",
  //     role: "SDE 1 - Nodejs",
  //     location: "Vashi",
  //     content:
  //       "As an SDE 1 - Node.js at Playerzpot Media Pvt Ltd, I am involved in backend development using Node.js. My responsibilities include designing and implementing APIs, optimizing server performance, and ensuring the reliability of server-side applications. I engage in code reviews, and contribute to improving our development processes.",
  //   },
  // ];

  return (
    <BaseLayout>
      <DisplayWrapper>
        <PageHeading heading="Experience" />
        <ExperiencesWrapper>
          {experiencesData.map((experience, index) => (
            <SmallNotchedBox key={index}>
              <ExperienceWrapper>
                <LeftSide data-aos="fade-left">
                  <CompanyImage
                    src={experience.imageSrc}
                    alt={experience.alt}
                    width={150}
                    height={150}
                  />
                </LeftSide>
                <RightSide>
                  <CompanyName>
                    {experience.company} <span>[{experience.period}]</span>
                  </CompanyName>
                  <Role>
                    {experience.role} <span>[{experience.location}]</span>
                  </Role>
                  <Content>{experience.content}</Content>
                </RightSide>
              </ExperienceWrapper>
            </SmallNotchedBox>
          ))}
        </ExperiencesWrapper>
      </DisplayWrapper>
    </BaseLayout>
  );
}

const DisplayWrapper = styled.div`
  width: 100%;
  margin-top: 80px;
  transition: all 0.5s ease-in-out;
`;

const ExperiencesWrapper = styled.div`
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

const ExperienceWrapper = styled.div`
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

const CompanyImage = styled(Image)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  clip-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
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

const CompanyName = styled.p`
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

const Role = styled.p`
  font-size: 16px;
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
