import { useSelector } from "react-redux";
import { uiState } from "../redux/uiSlice";
import styled, { keyframes } from "styled-components";

export const Hero = () => {
  const { theme } = useSelector(uiState);

  return (
    <DisplayWrapper>
      <LeftSide>
        <Name>Aman Mishra</Name>
        <Bio>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At,
          explicabo laudantium amet error dolore pariatur excepturi voluptatibus
          ipsam, fugiat quisquam odit nostrum.
          <br /> <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At,
          explicabo laudantium amet error dolore pariatur excepturi voluptatibus
          ipsam.
        </Bio>
        <StyledButton>
          <span>Contact Now</span>
        </StyledButton>
      </LeftSide>
      <RightSide></RightSide>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 4rem;
  margin-top: 60px;
`;

const LeftSide = styled.div`
  width: 100%;
`;

const RightSide = styled.div`
  width: 100%;
`;

const Name = styled.p`
  font-size: 50px;
  color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.globalColors.whiteColor
      : theme.globalColors.whiteColor};
`;

const Bio = styled.p`
  font-size: 20px;
  color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.globalColors.darkGrayColor
      : theme.globalColors.darkGrayColor};
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
