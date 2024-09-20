"use client";

import styled from "styled-components";
import BaseLayout from "@/app/components/BaseLayout";
import { PageHeading } from "@/app/components/PageHeading";

export default function About() {
  return (
    <BaseLayout>
      <DisplayWrapper>
        <PageHeading heading="About" />
      </DisplayWrapper>
    </BaseLayout>
  );
}

const DisplayWrapper = styled.div`
  width: 100%;
  margin-top: 80px;
`;
