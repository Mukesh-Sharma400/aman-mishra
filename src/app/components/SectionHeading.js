import styled from "styled-components";

export const SectionHeading = ({ heading }) => {
  return (
    <NotchedBox>
      <Heading>{heading}</Heading>
    </NotchedBox>
  );
};

const NotchedBox = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background-color: #0f1c1e;
  overflow: hidden;
  margin-top: 50px;
  transition: all 0.5s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    margin: -35px;
    width: 70px;
    height: 70px;
    transform: rotate(45deg);
    background-color: #11111a;
  }

  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    margin: -35px;
    width: 70px;
    height: 70px;
    transform: rotate(45deg);
    background-color: #11111a;
  }
`;

const Heading = styled.p`
  font-size: 50px;
  text-align: center;
  color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.globalColors.lightGreenColor
      : theme.globalColors.lightGreenColor};
  transition: all 0.5s ease-in-out;
`;
