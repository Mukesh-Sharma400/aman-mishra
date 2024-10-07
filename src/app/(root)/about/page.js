"use client";

import Image from "next/image";
import styled from "styled-components";
import BaseLayout from "@/app/components/BaseLayout";
import { PageHeading } from "@/app/components/PageHeading";
import profilePicture from "../../../../public/assets/me.jpg";

export default function About() {
  const skills = [
    "Network Security",
    "Risk Assessment & Management",
    "Event Management",
    "Cyber Threat Intelligence",
    "Security Auditing",
    "Vulnerability Assessment",
    "Incident Response",
    "Regulatory Compliance",
    "Prevention Systems",
    "Encryption Techniques",
    "Intrusion Detection",
    "Security Information",
    "Penetration Testing",
    "Firewall Management",
  ];

  const interests = [
    "Cryptography",
    "Blockchain Technology",
    "Data Privacy",
    "Cybersecurity Trends",
    "Cloud Security",
    "Security Automation",
    "Threat Hunting",
    "Digital Forensics",
    "Ethical Hacking",
    "Malware Analysis",
  ];

  const languages = ["English", "Hindi", "Marathi"];

  return (
    <BaseLayout>
      <DisplayWrapper>
        <PageHeading heading="About" />
        <IntroWrapper>
          <DetailsWrapper>
            <MyName data-aos="fade-right">Aman Mishra</MyName>
            <MyDesc data-aos="fade-right" data-aos-delay="100">
              Cybersecurity Analyst
            </MyDesc>
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
            <ProfilePicture
              src={profilePicture}
              alt="Aman Mishra"
              data-aos="fade-right"
              data-aos-delay="300"
            />
          </ImageWrapper>
        </IntroWrapper>
        <SectionHeading>Skills</SectionHeading>
        <ItemsWrapper>
          {skills.map((skill, index) => (
            <Item
              key={index}
              data-aos="fade-right"
              data-aos-delay={`${(index + 1) * 100}`}
            >
              {skill}
            </Item>
          ))}
        </ItemsWrapper>
        <SectionHeading>Interests</SectionHeading>
        <ItemsWrapper>
          {interests.map((interest, index) => (
            <Item
              key={index}
              data-aos="fade-right"
              data-aos-delay={`${(index + 1) * 100}`}
            >
              {interest}
            </Item>
          ))}
        </ItemsWrapper>
        <SectionHeading>Languages</SectionHeading>
        <ItemsWrapper>
          {languages.map((language, index) => (
            <Item
              key={index}
              data-aos="fade-right"
              data-aos-delay={`${(index + 1) * 100}`}
            >
              {language}
            </Item>
          ))}
        </ItemsWrapper>
      </DisplayWrapper>
    </BaseLayout>
  );
}

const DisplayWrapper = styled.div`
  width: 100%;
  margin-top: 80px;
  margin-bottom: 30px;
  transition: all 0.5s ease-in-out;
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
  transition: all 0.5s ease-in-out;

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
  transition: all 0.5s ease-in-out;
`;

const SectionHeading = styled.p`
  font-size: 40px;
  margin-top: 30px !important;
  color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.globalColors.mediumGreenColor
      : theme.globalColors.mediumGreenColor};
  transition: all 0.5s ease-in-out;
`;

const ItemsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  transition: all 0.5s ease-in-out;
`;

const Item = styled.div`
  width: fit-content;
  height: 40px;
  background: #313a3e;
  font-size: 18px;
  line-height: 18px;
  padding: 10px 10px 10px 25px;
  color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.globalColors.lightGreenColor
      : theme.globalColors.lightGreenColor};
  clip-path: polygon(20px 0, 100% 0, 100% 100%, 100% 100%, 0 100%, 0 20px);
  transition: all 0.5s ease-in-out;

  @media (max-width: 600px) {
    height: 35px;
    font-size: 16px;
    line-height: 16px;
  }
`;
