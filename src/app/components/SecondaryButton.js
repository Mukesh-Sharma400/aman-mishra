import React from "react";
import styled, { keyframes } from "styled-components";

export const SecondaryButton = ({ text }) => {
  return (
    <StyledButton>
      <span>{text}</span>
    </StyledButton>
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

const StyledButton = styled.button`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: #0f1c1e;
  padding: 0 20px;
  border-radius: 6em;
  transition: 0.3s;
  overflow: hidden;
  border: 2px solid #2a2b3a !important;

  &:hover,
  &:focus {
    background: #0f1c1e;
    border: 2px solid #00fa55 !important;
  }

  span {
    letter-spacing: 0.1rem;
    transition: 0.3s;
    position: relative;
    background: inherit;
  }

  span::before {
    box-sizing: border-box;
    position: absolute;
    content: "";
    background: inherit;
  }

  &:hover span::before,
  &:focus span::before {
    animation: ${chitchat} linear both 1.2s;
  }
`;
