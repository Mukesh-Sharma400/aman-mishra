import styled from "styled-components";
import { SectionHeading } from "../components/SectionHeading";

export const Experience = () => {
  return (
    <DisplayWrapper id="experience">
      <SectionHeading heading="Experience" />
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
`;
