"use client";

import Image from "next/image";
import styled from "styled-components";
import BaseLayout from "@/app/components/BaseLayout";
import dmwa from "../../../../public/assets/dmwa.jpeg";
import marys from "../../../../public/assets/marys.jpeg";
import pillai from "../../../../public/assets/pillai.jpg";
import { PageHeading } from "@/app/components/PageHeading";

export default function Education() {
  const educationsData = [
    {
      degree: "Bachelors in Computer Science",
      imageSrc: pillai,
      alt: "Pillai College of Arts, Commerce and Science",
      period: "September 2021 - May 2024",
      college: "Pillai College of Arts, Commerce and Science",
      location: "Panvel, Navi Mumbai",
      content:
        "During my Bachelor's in Computer Science, I gained a solid foundation in software development, algorithms, and data structures. I worked on multiple projects including a full-stack web application and an AI-based recommendation system. I also led a team in a hackathon, where we secured second place for developing a smart traffic management solution.",
    },
    {
      degree: "Higher School Certification",
      imageSrc: marys,
      alt: "St. Mary's College",
      period: "June 2019 - May 2021",
      college: "St. Mary's College",
      location: "Vashi, Navi Mumbai",
      content:
        "At St. Mary's College, I developed a strong understanding of mathematics and computer science fundamentals. I participated in various coding competitions and was an active member of the college’s tech club. My passion for software development was ignited during this time, leading me to explore programming languages like Python and JavaScript.",
    },
    {
      degree: "Secondary School Certification",
      imageSrc: dmwa,
      alt: "Smt. Radhikabai Meghe Vidyalaya",
      period: "June 2017 - March 2019",
      college: "Smt. Radhikabai Meghe Vidyalaya",
      location: "Airoli, Navi Mumbai",
      content:
        "In high school, I built a strong foundation in the sciences, particularly in mathematics and computer studies. I was a consistent top performer in my class and received recognition for my project on 'Automation in Everyday Life'. This phase solidified my interest in pursuing a career in technology.",
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
                    {education.degree} <span>[{education.period}]</span>
                  </EducationName>
                  <College>
                    {education.college} <span>[{education.location}]</span>
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
  transition: all 0.5s ease-in-out;
`;

const EducationsWrapper = styled.div`
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
