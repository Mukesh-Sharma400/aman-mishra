"use client";

import Image from "next/image";
import styled from "styled-components";
import BaseLayout from "@/app/components/BaseLayout";
import { PageHeading } from "@/app/components/PageHeading";
import profilePicture from "../../../../public/assets/me.jpg";

export default function Education() {
  const educationsData = [
    {
      degree: "Bachelors in Information Technology",
      imageSrc: profilePicture,
      alt: "Sanpada College of Commerce & Technology",
      period: "September 2020 - May 2023",
      college: "Sanpada College of Commerce & Technology",
      location: "Sanpada, Navi Mumbai",
      content:
        "I always had a passion for web development and acquired skills in various web technologies. I have created many websites, which impressed all my colleagues and professors. I became a sought-after web developer, proving that hard work and dedication can lead to success.",
    },
    {
      degree: "Higher School Certification",
      imageSrc: profilePicture,
      alt: "Pace Education Society",
      period: "June 2016 - May 2018",
      college: "Pace Education Society",
      location: "Nerul, Navi Mumbai",
      content:
        "I was always fascinated by the mysteries of the universe. Despite not being the smartest student in my class, I spend every free moment delving into books and videos on cosmology and astrophysics.",
    },
    {
      degree: "Secondary School Certification",
      imageSrc: profilePicture,
      alt: "Tilak International School",
      period: "June 2015 - March 2016",
      college: "Tilak International School",
      location: "Ghansoli, Navi Mumbai",
      content:
        "I always had a keen interest in computers and technology. I used to participate in a school computer science competition despite my lack of confidence. I studied hard, boosting my confidence and setting me on a path towards a successful career in technology.",
    },
  ];

  return (
    <BaseLayout>
      <DisplayWrapper>
        <PageHeading heading="Education" />
        <EducationsWrapper>
          {educationsData.map((education, index) => (
            <SmallNotchedBox key={index}>
              <EducationWrapper>
                <LeftSide data-aos="fade-left">
                  <EducationImage
                    src={education.imageSrc}
                    alt={education.alt}
                    width={150}
                    height={150}
                  />
                </LeftSide>
                <RightSide>
                  <EducationName>
                    {education.degree} <span>({education.period})</span>
                  </EducationName>
                  <College>
                    {education.college} <span>({education.location})</span>
                  </College>
                  <Content>{education.content}</Content>
                </RightSide>
              </EducationWrapper>
            </SmallNotchedBox>
          ))}
        </EducationsWrapper>
      </DisplayWrapper>
    </BaseLayout>
  );
}

const DisplayWrapper = styled.div`
  width: 100%;
  margin-top: 80px;
`;

const EducationsWrapper = styled.div`
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

const EducationWrapper = styled.div`
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

const EducationImage = styled(Image)`
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

const EducationName = styled.p`
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

const College = styled.p`
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
