"use client";

import copy from "clipboard-copy";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { uiState } from "@/app/redux/uiSlice";
import { Toast } from "@/app/components/Toast";
import { TextBox } from "@/app/components/TextBox";
import { TextArea } from "@/app/components/TextArea";
import BaseLayout from "@/app/components/BaseLayout";
import styled, { keyframes } from "styled-components";
import { PageHeading } from "@/app/components/PageHeading";

export default function Contact() {
  const timeoutRef = useRef(null);
  const phoneNumber = "+919834248447";
  const { theme } = useSelector(uiState);
  const emailAddress = "amanpavanmishra10@gmail.com";
  const [toast, setToast] = useState({ visible: false, message: "" });

  const showToastMethod = (message) => {
    setToast({ visible: true, message });
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setToast({ visible: false, message: "" });
    }, 3000);
  };

  const handleOpenDialer = () => {
    const telUrl = `tel:${phoneNumber}`;
    window.location.href = telUrl;
  };

  const handleCopyEmail = () => {
    const emailToCopy = `${emailAddress}`;
    copy(emailToCopy);
    showToastMethod("Email copied to clipboard");
  };

  return (
    <BaseLayout>
      <ToastWrapper showToast={toast.visible}>
        <Toast message={toast.message} />
      </ToastWrapper>
      <DisplayWrapper>
        <PageHeading heading="Contact" />
        <EmailNumberWrapper>
          <SmallNotchedBox>
            <NumberWrapper>
              <div>
                <Title>+91 9834248447</Title>
                <SubTitle>- Phone</SubTitle>
              </div>
              <CopyBtn onClick={handleOpenDialer}>
                <i class="bi bi-telephone"></i>
              </CopyBtn>
            </NumberWrapper>
          </SmallNotchedBox>
          <SmallNotchedBox>
            <EmailWrapper>
              <div>
                <Title>amanpavanmishra10@gmail.com</Title>
                <SubTitle>- Email</SubTitle>
              </div>
              <CopyBtn onClick={handleCopyEmail}>
                <i class="bi bi-copy"></i>
              </CopyBtn>
            </EmailWrapper>
          </SmallNotchedBox>
        </EmailNumberWrapper>
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

const ToastWrapper = styled.div`
  position: fixed;
  top: ${(props) => (props.showToast ? "7%" : "-20%")};
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  transition: all 0.5s ease-in-out;
`;

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
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
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

  @media (max-width: 460px) {
    font-size: 20px;
  }
`;

const SubTitle = styled.p`
  font-size: 20px;
  color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.globalColors.lightGrayColor
      : theme.globalColors.lightGrayColor};
  transition: all 0.5s ease-in-out;
`;

const CopyBtn = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  background: transparent;
  border-radius: 5px;
  color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.globalColors.mediumGreenColor
      : theme.globalColors.mediumGreenColor};
  border: 1px solid
    ${({ theme }) =>
      theme.currentTheme === "dark"
        ? theme.globalColors.mediumGreenColor
        : theme.globalColors.mediumGreenColor} !important;
  transition: all 0.5s ease-in-out;

  &:hover {
    color: ${({ theme }) =>
      theme.currentTheme === "dark"
        ? theme.globalColors.lightGreenColor
        : theme.globalColors.lightGreenColor};
    border: 1px solid
      ${({ theme }) =>
        theme.currentTheme === "dark"
          ? theme.globalColors.lightGreenColor
          : theme.globalColors.lightGreenColor} !important;
  }
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
