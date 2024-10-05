"use client";

import styled from "styled-components";
import BaseLayout from "@/app/components/BaseLayout";
import { PageHeading } from "@/app/components/PageHeading";

export default function Projects() {
  return (
    <BaseLayout>
      <DisplayWrapper>
        <PageHeading heading="Projects" />
      </DisplayWrapper>
    </BaseLayout>
  );
}

const DisplayWrapper = styled.div`
  width: 100%;
  margin-top: 80px;
  transition: all 0.5s ease-in-out;
`;
