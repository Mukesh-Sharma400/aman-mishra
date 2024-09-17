import styled from "styled-components";
import { SectionHeading } from "../components/SectionHeading";

export const Education = () => {
  return (
    <DisplayWrapper id="education">
      <SectionHeading heading="Education" />
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
`;
