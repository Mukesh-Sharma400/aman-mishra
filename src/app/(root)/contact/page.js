"use client";

import { useSelector } from "react-redux";
import { uiState } from "@/app/redux/uiSlice";
import { TextBox } from "@/app/components/TextBox";
import { TextArea } from "@/app/components/TextArea";
import BaseLayout from "@/app/components/BaseLayout";
import styled, { keyframes } from "styled-components";
import { PageHeading } from "@/app/components/PageHeading";
import { PrimaryButton } from "@/app/components/PrimaryButton";
import { SecondaryButton } from "@/app/components/SecondaryButton";

export default function Contact() {
  const { theme } = useSelector(uiState);

  return (
    <BaseLayout>
      <DisplayWrapper>
        <PageHeading heading="Contact" />
        <EmailNumberWrapper>
          <SmallNotchedBox>
            <NumberWrapper>
              <Title>+91 9834248447</Title>
              <SubTitle>Phone</SubTitle>
            </NumberWrapper>
          </SmallNotchedBox>
          <SmallNotchedBox>
            <EmailWrapper>
              <Title>amanpavanmishra10@gmail.com</Title>
              <SubTitle>Email</SubTitle>
            </EmailWrapper>
          </SmallNotchedBox>
        </EmailNumberWrapper>
        {/* <ButtonsWrapper>
          <PrimaryButton text="Call Me" />
          <SecondaryButton text="Copy Email" />
        </ButtonsWrapper> */}
        <NotchedBox>
          <FormContainer>
            <Heading>Send a message</Heading>
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
          </FormContainer>
        </NotchedBox>
      </DisplayWrapper>
    </BaseLayout>
  );
}

const DisplayWrapper = styled.div`
  width: 100%;
  margin-top: 80px;
`;

const EmailNumberWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin: 30px 0px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const SmallNotchedBox = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

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

const EmailWrapper = styled.div`
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

const NumberWrapper = styled.div`
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

const Title = styled.p`
  font-size: 24px;
  color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.globalColors.whiteColor
      : theme.globalColors.whiteColor};
  transition: all 0.5s ease-in-out;
`;

const SubTitle = styled.p`
  font-size: 20px;
  color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.globalColors.lightGrayColor
      : theme.globalColors.lightGrayColor};
  transition: all 0.5s ease-in-out;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  margin: 80px 0;
`;

const NotchedBox = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

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

const FormContainer = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background-color: #0f1c1e;
  overflow: hidden;
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
`;

const Heading = styled.p`
  font-size: 40px;
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
  width: 100%;
  height: 50px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.globalColors.lightGreenColor
      : theme.globalColors.lightGreenColor};
  background: #313a3e;
  transition: 0.3s;
  overflow: hidden;
  clip-path: polygon(30px 0, 100% 0, 100% 100%, 100% 100%, 0 100%, 0 30px);

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

  &:hover span::before,
  &:focus span::before {
    animation: ${chitchat} linear both 1.2s;
  }
`;
