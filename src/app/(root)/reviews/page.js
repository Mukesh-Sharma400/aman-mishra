"use client";

import styled from "styled-components";
import BaseLayout from "@/app/components/BaseLayout";
import { PageHeading } from "@/app/components/PageHeading";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Reviews() {
  const reviewsData = [
    {
      message:
        "Completed the hack flawlessly, within the allotted time and resources. ShadowFox is a pro at understanding complex systems and provided valuable insights. Highly recommended for any covert ops!",
      name: "ZeroCool",
      rating: 5,
    },
    {
      message:
        "I hired BlackHat for a high-stakes exploit, and I must say their skills are unparalleled. The best part is their calm demeanor under pressure and impeccable execution. If you need someone with serious skills, look no further.",
      name: "PhantomX",
      rating: 5,
    },
    {
      message:
        "We had an incredible experience working with NullByte. They cracked into a high-security system for us, and the precision with which they worked was remarkable. Would recommend them for any top-tier hack!",
      name: "Cypher",
      rating: 5,
    },
    {
      message:
        "Got my system breach done seamlessly thanks to Ghost. A skilled and reliable operator—I'd definitely work with them again on future missions.",
      name: "RootKit",
      rating: 5,
    },
    {
      message:
        "Top-notch crew and lightning-fast response. Rates are surprisingly reasonable for the level of expertise they bring. Keep up the great work!",
      name: "CodeBreaker",
      rating: 5,
    },
    {
      message:
        "Mind-blowing penetration test! The way they mapped vulnerabilities and exploited them made my system more secure than ever. Couldn’t ask for better results.",
      name: "DarkKnight",
      rating: 5,
    },
    {
      message:
        "Expert hacker with on-time delivery. Professional, discreet, and highly effective. Would absolutely recommend for sensitive projects.",
      name: "SilentShadow",
      rating: 5,
    },
    {
      message:
        "Delivered the job right on time, exactly how I envisioned. Exceptional experience, very skilled in stealth and precision!",
      name: "RedPhantom",
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
                        <Name>- {review.name}</Name>
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
