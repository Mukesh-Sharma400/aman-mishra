"use client";

import Image from "next/image";
import styled from "styled-components";
import BaseLayout from "@/app/components/BaseLayout";
import { PageHeading } from "@/app/components/PageHeading";
import bharatIntern from "../../../../public/assets/bharatintern.jpeg";

export default function Experience() {
  const experiencesData = [
    {
      company: "Bharat Intern",
      imageSrc: bharatIntern,
      alt: "Bharat Intern",
      period: "April 2023 - May 2023",
      role: "Web Developer Intern",
      location: "Navi Mumbai",
      content:
        "Assisted in developing and maintaining website components, collaborated with the design team to enhance user interface features, and worked on optimizing web performance. Gained hands-on experience with JavaScript, HTML, CSS, and various front-end frameworks to create responsive web pages.",
    },
  ];

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
