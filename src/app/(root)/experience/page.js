"use client";

import styled from "styled-components";
import BaseLayout from "@/app/components/BaseLayout";
import { PageHeading } from "@/app/components/PageHeading";

export default function Experience() {
  return (
    <BaseLayout>
      <DisplayWrapper>
        <PageHeading heading="Experience" />
      </DisplayWrapper>
    </BaseLayout>
  );
}

const DisplayWrapper = styled.div`
  width: 100%;
  margin-top: 80px;
`;
