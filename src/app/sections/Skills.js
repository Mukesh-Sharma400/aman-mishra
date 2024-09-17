import styled from "styled-components";
import { SectionHeading } from "../components/SectionHeading";

export const Skills = () => {
  return (
    <DisplayWrapper id="skills">
      <SectionHeading heading="Skills" />
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
`;
