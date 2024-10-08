"use client";

import styled from "styled-components";
import BaseLayout from "@/app/components/BaseLayout";
import { PageHeading } from "@/app/components/PageHeading";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Reviews() {
  const reviewsData = [
    {
      message:
        "I’ve known Aman for years, and his expertise in cybersecurity never ceases to amaze me. From programming keyloggers in Python to performing detailed Windows security assessments, he’s always at the top of his game. He approaches every task with precision and a passion for learning, making him a fantastic collaborator on any project.",
      name: "Nikhil Messa",
      post: "Cybsecurity Analyst",
      rating: 5,
    },
    {
      message:
        "Aman’s skills in ethical hacking and cybersecurity are unmatched. He’s incredibly knowledgeable about network security, penetration testing, and even advanced topics like session hijacking and malware threats. What stands out is his ability to explain complex concepts in simple terms and provide efficient solutions. It’s always a pleasure to work with someone so dedicated.",
      name: "Aditya Rawat",
      post: "Ethical Hacker",
      rating: 5,
    },
    {
      message:
        "Aman was a standout during the Certified Ethical Hacking course at RST Forum. He quickly grasped advanced topics like penetration testing, web application hacking, and session hijacking. His practical approach to solving complex cybersecurity challenges was impressive. Aman’s dedication and enthusiasm for ethical hacking were evident in every project he worked on.",
      name: "Pragya Shinde",
      post: "RST Forum Professor",
      rating: 5,
    },
    {
      message:
        "Aman did an incredible job during his web development internship at Bharat Intern, especially with the Netflix clone project. He showed strong skills in HTML and CSS, creating a sleek and responsive design. His attention to detail and creativity really brought the project to life, making the user interface both functional and visually appealing.",
      name: "Prajwal Kolure",
      post: "Bharat Intern",
      rating: 5,
    },
    {
      message:
        "Aman was a dedicated and talented intern during his time at Bharat Intern. He showcased his proficiency in HTML and CSS, quickly grasping new concepts and applying them effectively. His positive attitude, teamwork, and commitment to delivering high-quality work were greatly appreciated by the entire team.",
      name: "Bharat Intern",
      post: "Bharat Intern",
      rating: 5,
    },
    {
      message:
        "Aman is an absolute tech wizard! His skills in Python, SQL, HTML, and CSS are impressive, and he tackles every project with enthusiasm. I’ve seen him work with cybersecurity tools like Wireshark and Metasploit, and his problem-solving skills always shine through. Plus, he’s super approachable and always willing to lend a hand. Anyone would be lucky to have him on their team!",
      name: "Mayur Kale",
      post: "Server Operator",
      rating: 5,
    },
    {
      message:
        "Aman is a passionate and driven individual who truly loves technology. His positive attitude and eagerness to learn make him a pleasure to work with. He has strong problem-solving skills and always shares his knowledge with others. Aman fosters a collaborative spirit that inspires everyone around him.",
      name: "Ravi Patil",
      post: "Full Stack Developer",
      rating: 5,
    },
    {
      message:
        "Aman is a passionate tech enthusiast whose curiosity and creativity inspire those around him. His collaborative spirit and problem-solving abilities make him a valuable asset to any team.",
      name: "Hrithik Shah",
      post: "Networking Engineer",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className="bi bi-star-fill"></i>);
      } else {
        stars.push(<i key={i} className="bi bi-star"></i>);
      }
    }
    return stars;
  };

  return (
    <BaseLayout>
      <DisplayWrapper>
        <PageHeading heading="Reviews" />
        <ReviewsWrapper>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 700: 2, 1024: 3 }}
          >
            <Masonry gutter="16px">
              {reviewsData.map((review, index) => (
                <NotchedBox key={index} data-aos="fade-up">
                  <ReviewsCard>
                    <Message>{review.message}</Message>
                    <PicNameWrapper>
                      <div>
                        <Name>
                          - {review.name} ({review.post})
                        </Name>
                        <Ratings>{renderStars(review.rating)}</Ratings>
                      </div>
                    </PicNameWrapper>
                  </ReviewsCard>
                </NotchedBox>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </ReviewsWrapper>
      </DisplayWrapper>
    </BaseLayout>
  );
}

const DisplayWrapper = styled.div`
  width: 100%;
  transition: all 0.5s ease-in-out;
`;

const ReviewsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 20px auto 0;
  transition: all 0.5s ease-in-out;
`;

const NotchedBox = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in-out;

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

const ReviewsCard = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #0f1c1e;
  border: 1px solid
    ${({ theme }) =>
      theme.currentTheme === "dark"
        ? theme.globalColors.darkGreenColor
        : theme.globalColors.darkGreenColor};
  clip-path: polygon(30px 0, 100% 0, 100% 100%, 100% 100%, 0 100%, 0 30px);
  transition: all 0.5s ease-in-out;
`;

const Message = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-style: italic;
  letter-spacing: 1px;
  color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.globalColors.whiteColor
      : theme.globalColors.whiteColor};
  transition: all 0.5s ease-in-out;
`;

const PicNameWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px !important;
  transition: all 0.5s ease-in-out;
`;

const Name = styled.p`
  font-size: 16px;
  color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.globalColors.lightGrayColor
      : theme.globalColors.lightGrayColor};
  transition: all 0.5s ease-in-out;
`;

const Ratings = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  color: #fbbc04;
  transition: all 0.5s ease-in-out;
`;
