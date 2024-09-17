import { useSelector } from "react-redux";
import { uiState } from "../redux/uiSlice";
import { TextBox } from "../components/TextBox";
import { TextArea } from "../components/TextArea";
import styled, { keyframes } from "styled-components";

export const Contact = () => {
  const { theme } = useSelector(uiState);

  return (
    <DisplayWrapper id="contact">
      <NotchedBox>
        <Heading>Contact Now</Heading>
        <FormWrapper>
          <NameEmailWrapper>
            <TextBox type="text" placeholder="Name" name="from_name" />
            <TextBox
              type="email"
              placeholder="Email"
              name="from_email"
              required
            />
          </NameEmailWrapper>
          <TextArea type="text" placeholder="Message" name="message" />
          <StyledButton type="submit">
            <span>Send Message</span>
          </StyledButton>
        </FormWrapper>
      </NotchedBox>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
`;

const NotchedBox = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background-color: #0f1c1e;
  overflow: hidden;
  margin-top: 50px;

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
  margin-top: 20px !important;
  color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.globalColors.lightGreenColor
      : theme.globalColors.lightGreenColor};
`;

const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 50px;
`;

const NameEmailWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
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
  position: relative;
  width: 100%;
  height: 50px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.globalColors.lightGreenColor
      : theme.globalColors.lightGreenColor};
  background-color: #7b7b8350;

  span {
    transition: 0.3s;
    box-sizing: border-box;
    position: relative;
  }

  span::before {
    box-sizing: border-box;
    position: absolute;
    content: "";
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    margin: -20px;
    width: 40px;
    height: 40px;
    transform: rotate(45deg);
    background-color: #0f1c1e;
  }

  &:hover span::before,
  &:focus span::before {
    animation: ${chitchat} linear both 1.2s;
  }
`;
