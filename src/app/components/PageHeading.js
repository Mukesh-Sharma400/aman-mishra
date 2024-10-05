import styled, { keyframes } from "styled-components";

export const PageHeading = ({ heading }) => {
  return (
    <NotchedBox>
      <Heading>
        <span>{heading}</span>
      </Heading>
    </NotchedBox>
  );
};

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

const NotchedBox = styled.div`
  width: 100%;
  height: 100px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in-out;

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

const Heading = styled.p`
  font-size: 50px;
  text-align: center;
  color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.globalColors.lightGreenColor
      : theme.globalColors.lightGreenColor};
  width: 100%;
  height: 100px;
  padding: 10px;
  border: 1px solid
    ${({ theme }) =>
      theme.currentTheme === "dark"
        ? theme.globalColors.lightGreenColor
        : theme.globalColors.lightGreenColor};
  clip-path: polygon(
    80px 0,
    100% 0,
    100% 20px,
    calc(100% - 80px) 100%,
    0 100%,
    0 80px
  );
  background: #11111a;
  transition: 0.3s;
  overflow: hidden;

  span {
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: 0.3s;
    position: relative;
    background: inherit;
  }

  span::before {
    position: absolute;
    content: "";
    background: inherit;
  }

  span::before,
  span::before {
    animation: ${chitchat} linear both 1.2s;
  }
`;
