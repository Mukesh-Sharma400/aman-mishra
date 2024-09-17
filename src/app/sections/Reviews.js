import styled from "styled-components";
import { SectionHeading } from "../components/SectionHeading";

export const Reviews = () => {
  return (
    <DisplayWrapper id="reviews">
      <SectionHeading heading="Reviews" />
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
`;
