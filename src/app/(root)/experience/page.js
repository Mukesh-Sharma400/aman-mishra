"use client";

import Image from "next/image";
import styled from "styled-components";
import BaseLayout from "@/app/components/BaseLayout";
import { PageHeading } from "@/app/components/PageHeading";
import profilePicture from "../../../../public/assets/me.jpg";

export default function Experience() {
  const experiencesData = [
    {
      company: "Playerzpot Media Pvt Ltd",
      imageSrc: profilePicture,
      alt: "Playerzpot Media Pvt Ltd",
      period: "May 2024 - Present",
      role: "SDE 1 - Nodejs",
      location: "Vashi",
      content:
        "As an SDE 1 - Node.js at Playerzpot Media Pvt Ltd, I am involved in backend development using Node.js. My responsibilities include designing and implementing APIs, optimizing server performance, and ensuring the reliability of server-side applications. I engage in code reviews, and contribute to improving our development processes.",
    },
    {
      company: "AppAvengers Labs Pvt Ltd",
      imageSrc: profilePicture,
      alt: "AppAvengers Labs Pvt Ltd",
      period: "July 2023 - April 2024",
      role: "Junior Web Developer",
      location: "Remote",
      content:
        "As a Junior Web Developer at AppAvengers Labs Pvt Ltd, I'm contributing to web app development with Next.js, Angular and Web3 Technologies. I'm designing interfaces, implementing features, and engaging in code reviews for continuous learning.",
    },
    {
      company: "NullClass",
      imageSrc: profilePicture,
      alt: "NullClass",
      period: "December 2022 - January 2023",
      role: "Project Intern",
      location: "Remote",
      content:
        "As a NullClass Project Intern, I created a responsive MERN Stack app (Stack Overflow Clone) and added features like a chat bot and community section. I gained valuable experience in React, Node.js, Express.js, and MongoDB, improving my skills in building scalable and user-centric web applications.",
    },
    {
      company: "Hasbasoft Technology Pvt Ltd",
      imageSrc: profilePicture,
      alt: "Hasbasoft Technology Pvt Ltd",
      period: "August 2021 - October 2022",
      role: "MERN Stack Software Trainee",
      location: "Online",
      content:
        "As a Software Trainee at Hasbasoft Technology Pvt Ltd, I built several MERN Stack applications, including an Ecommerce platform. Through hands-on experience, I gained expertise in React, Node.js, Express.js, and MongoDB, developing dynamic and user-friendly web solutions in a professional software development environment.",
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
  margin-top: 80px;
`;

const ExperiencesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 30px;
`;

const SmallNotchedBox = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

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
