"use client";

import Image from "next/image";
import styled from "styled-components";
import BaseLayout from "@/app/components/BaseLayout";
import { PageHeading } from "@/app/components/PageHeading";
import profilePicture from "../../../../public/assets/me.jpg";

export default function About() {
  const skills = [
    "Network Security",
    "Security Auditing",
    "Incident Response",
    "Firewall Management",
    "Penetration Testing",
    "Encryption Techniques",
    "Regulatory Compliance",
    "Vulnerability Assessment",
    "Cyber Threat Intelligence",
    "Risk Assessment & Management",
    "Security Information & Event Management",
    "Intrusion Detection & Prevention Systems",
  ];

  return (
    <BaseLayout>
      <DisplayWrapper>
        <PageHeading heading="About" />
        <IntroWrapper>
          <DetailsWrapper>
            <MyName>Aman Mishra</MyName>
            <MyDesc>Cybersecurity Analyst</MyDesc>
            <MyStory>
              <span>
                I'm Aman Mishra, a dedicated cybersecurity professional with a
                passion for safeguarding digital assets.
              </span>{" "}
              My expertise lies in network security, vulnerability assessments,
              penetration testing, and ethical hacking. Armed with a strong
              foundation in Python programming, I'm proficient in scripting
              automated tasks, analyzing malware, and developing innovative
              security solutions. I'm committed to staying ahead of emerging
              threats and contributing to a more secure digital landscape.
            </MyStory>
          </DetailsWrapper>
          <ImageWrapper>
            <ProfilePicture src={profilePicture} alt="Aman Mishra" />
          </ImageWrapper>
        </IntroWrapper>
        <SectionHeading>Skills</SectionHeading>
        <SkillsWrapper>
          {skills.map((skill, index) => (
            <Skill key={index}>{skill}</Skill>
          ))}
        </SkillsWrapper>
      </DisplayWrapper>
    </BaseLayout>
  );
}

const DisplayWrapper = styled.div`
  width: 100%;
  margin-top: 80px;
`;

const IntroWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 50px;
  margin-top: 30px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 600px) {
    gap: 20px;
    flex-direction: column-reverse;
  }
`;

const DetailsWrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const MyName = styled.h1`
  line-height: 40px;
  color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.globalColors.whiteColor
      : theme.globalColors.whiteColor};
  transition: all 0.5s ease-in-out;
`;

const MyDesc = styled.h1`
  line-height: 40px;
  color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.globalColors.whiteColor
      : theme.globalColors.whiteColor};
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.5s ease-in-out;
`;

const MyStory = styled.p`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 1px;
  margin-top: 10px !important;
  color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.globalColors.lightGrayColor
      : theme.globalColors.lightGrayColor};
  transition: all 0.5s ease-in-out;

  span {
    color: ${({ theme }) =>
      theme.currentTheme === "dark"
        ? theme.globalColors.mediumGreenColor
        : theme.globalColors.mediumGreenColor};
  }
`;

const ImageWrapper = styled.div`
  width: 25%;
  height: fit-content;
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
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    margin: -40px;
    width: 80px;
    height: 80px;
    transform: rotate(45deg);
    background-color: #00fa55;
  }

  @media (max-width: 600px) {
    width: 50%;
    margin: 0;
  }
`;

const ProfilePicture = styled(Image)`
  width: 100%;
  height: auto;
  padding: 10px;
  border: 1px solid
    ${({ theme }) =>
      theme.currentTheme === "dark"
        ? theme.globalColors.lightGreenColor
        : theme.globalColors.lightGreenColor};
  clip-path: polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0 20%);
`;

const SectionHeading = styled.p`
  font-size: 40px;
  margin-top: 30px !important;
  color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.globalColors.mediumGreenColor
      : theme.globalColors.mediumGreenColor};
`;

const SkillsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Skill = styled.div`
  width: fit-content;
  height: 50px;
  background: #313a3e;
  font-size: 17px;
  padding: 10px 10px 10px 35px;
  color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.globalColors.lightGreenColor
      : theme.globalColors.lightGreenColor};
  clip-path: polygon(30px 0, 100% 0, 100% 100%, 100% 100%, 0 100%, 0 30px);
  transition: all 0.5s ease-in-out;
`;
