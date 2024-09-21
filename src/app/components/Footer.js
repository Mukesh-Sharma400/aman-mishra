import styled from "styled-components";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <DisplayWrapper>
      <BottomWrapper>
        <LeftSide>
          <p>
            © {currentYear} <span>Aman Mishra</span>. All rights reserved.
          </p>
        </LeftSide>
        <RightSide>
          <p>
            Designed and Developed by{" "}
            <a href="https://mukesh-sharma.vercel.app" target="_blank">
              Mukesh Sharma
            </a>
          </p>
        </RightSide>
      </BottomWrapper>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 50px 0;
  max-width: 1100px;
  margin: 0 auto;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1100px) {
    padding: 50px 50px;
  }
  @media (max-width: 376px) {
    padding: 50px 0px;
  }
`;

const BottomWrapper = styled.div`
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.globalColors.darkGrayColor
      : theme.globalColors.darkGrayColor};
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
`;

const LeftSide = styled.div`
  transition: all 0.5s ease-in-out;
  span {
    font-weight: 600;
    color: ${({ theme }) =>
      theme.currentTheme === "dark"
        ? theme.globalColors.lightGreenColor
        : theme.globalColors.lightGreenColor};
    transition: all 0.5s ease-in-out;
  }
`;

const RightSide = styled.div`
  transition: all 0.5s ease-in-out;

  a {
    color: white;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.5s ease-in-out;

    &:hover {
      cursor: pointer;
      color: royalBlue;
    }
  }
`;
