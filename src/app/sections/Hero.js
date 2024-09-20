import Image from "next/image";
import { useSelector } from "react-redux";
import { uiState } from "../redux/uiSlice";
import styled, { keyframes } from "styled-components";
import profilePicture from "../../../public/assets/me.jpg";

export const Hero = () => {
  const { theme } = useSelector(uiState);

  return (
    <DisplayWrapper>
      <LeftSide>
        <Name>Aman Mishra</Name>
        <Bio>
          <span>
            I'm Aman Mishra, a dedicated cybersecurity professional with a
            passion for safeguarding digital assets.
          </span>{" "}
          My expertise lies in network security, vulnerability assessments,
          penetration testing, and ethical hacking. Armed with a strong
          foundation in Python programming, I'm proficient in scripting
          automated tasks, analyzing malware, and developing innovative security
          solutions. I'm committed to staying ahead of emerging threats and
          contributing to a more secure digital landscape.
        </Bio>
        <StyledButton>
          <span>Contact Now</span>
        </StyledButton>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <ProfilePicture src={profilePicture} alt="Aman Mishra" />
        </ImageWrapper>
      </RightSide>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 4rem;
  margin-top: 80px;
`;

const LeftSide = styled.div`
  width: 100%;
`;

const RightSide = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Name = styled.p`
  font-size: 50px;
  color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.globalColors.whiteColor
      : theme.globalColors.whiteColor};
`;

const Bio = styled.p`
  font-size: 19px;
  color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.globalColors.darkGrayColor
      : theme.globalColors.darkGrayColor};
  span {
    color: ${({ theme }) =>
      theme.currentTheme === "dark"
        ? theme.globalColors.mediumGreenColor
        : theme.globalColors.mediumGreenColor};
  }
`;

const chitchat = keyframes`
  0% { content: "#"; }
  5% { content: "."; }
  10% { content: "^{"; }
  15% { content: "-!"; }
  20% { content: "#$_"; }
  25% { content: "№:0"; }
  30% { content: "#{+.";}
  35% { content: "@}-?"; }
  40% { content: "?{4@%"; }
  45% { content: "=.,^!"; }
  50% { content: "?2@%"; }
  55% { content: "\\;1}]";  right: 0;}
  60% { content: "?{%:%"; right: 0; }
  65% { content: "|{f[4"; right: 0; }
  70% { content: "{4%0%"; right: 0; }
  75% { content: "'1_0<"; right: 0; }
  80% { content: "{0%"; right: 0; }
  85% { content: "]>'"; right: 0;}
  90% { content: "4"; right: 0;}
  95% { content: "2"; right: 0; }
  100% { content: ""; right: 0;}
`;

const StyledButton = styled.button`
  --btn-default-bg: black;
  --btn-padding: 15px 20px;
  --btn-hover-bg: green;
  --btn-transition: 0.3s;
  --btn-letter-spacing: 0.1rem;
  --btn-animation-duration: 1.2s;
  --btn-shadow-color: green;
  --btn-shadow: 0 2px 10px 0 var(--btn-shadow-color);
  --hover-btn-color: #7241ff;
  --default-btn-color: #fff;
  --font-size: 16px;
  --font-weight: 600;
  --font-family: Menlo, Roboto Mono, monospace;
  border-radius: 6em;
  margin-top: 2rem;

  box-sizing: border-box;
  padding: var(--btn-padding);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--default-btn-color);
  font: var(--font-weight) var(--font-size) var(--font-family);
  background: var(--btn-default-bg);
  cursor: pointer;
  transition: var(--btn-transition);
  overflow: hidden;
  box-shadow: var(--btn-shadow);
  border-radius: 6em;
  border: 2px solid #2a2b3a !important;

  &:hover,
  &:focus {
    background: var(--btn-default-bg);
    box-shadow: 0px 0px 10px 0px rgba(119, 68, 255, 0.7);
    border: 2px solid rgb(9, 255, 0) !important;
  }

  span {
    letter-spacing: var(--btn-letter-spacing);
    transition: var(--btn-transition);
    box-sizing: border-box;
    position: relative;
    background: inherit;
  }

  span::before {
    box-sizing: border-box;
    position: absolute;
    content: "";
    background: inherit;
  }

  &:hover span,
  &:focus span {
    color: rgb(9, 255, 0);
  }

  &:hover span::before,
  &:focus span::before {
    animation: ${chitchat} linear both var(--btn-animation-duration);
  }
`;

const ImageWrapper = styled.div`
  width: 80%;
  height: auto;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    margin: -50px;
    width: 100px;
    height: 100px;
    transform: rotate(45deg);
    background-color: #00fa55;
  }

  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    margin: -50px;
    width: 100px;
    height: 100px;
    transform: rotate(45deg);
    background-color: #00fa55;
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
