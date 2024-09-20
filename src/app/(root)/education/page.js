"use client";

import styled from "styled-components";
import BaseLayout from "@/app/components/BaseLayout";
import { PageHeading } from "@/app/components/PageHeading";

export default function Education() {
  return (
    <BaseLayout>
      <DisplayWrapper>
        <PageHeading heading="Education" />
      </DisplayWrapper>
    </BaseLayout>
  );
}

const DisplayWrapper = styled.div`
  width: 100%;
  margin-top: 80px;
`;
