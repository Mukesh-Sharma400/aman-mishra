"use client";

import styled from "styled-components";
import BaseLayout from "../components/BaseLayout";
import { PageHeading } from "../components/PageHeading";

export default function Home() {
  return (
    <BaseLayout>
     <DisplayWrapper>
      <PageHeading heading="Home" />
     </DisplayWrapper>
    </BaseLayout>
  );
}

const DisplayWrapper = styled.div`
  width: 100%;
  margin-top: 80px;
`;