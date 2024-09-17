import styled from "styled-components";
import { SectionHeading } from "../components/SectionHeading";

export const Projects = () => {
  return (
    <DisplayWrapper id="projects">
      <SectionHeading heading="Projects" />
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
`;
