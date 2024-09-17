"use client";

import { Header } from "./Header";
import { Footer } from "./Footer";
import styled from "styled-components";

export default function BaseLayout({ children }) {
  return (
    <DisplayWrapper>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </DisplayWrapper>
  );
}

const DisplayWrapper = styled.div`
  transition: all 0.5s ease-in-out;
`;

const ContentWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1100px) {
    margin: 0 10px;
  }
`;
