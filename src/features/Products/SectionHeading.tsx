import styled from "styled-components";

const SectionHeadingParent = styled.div``;
const HeadType = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-size: 1.45rem;
  background: linear-gradient(
    270deg,
    var(--color-brand-green-300),
    var(--color-brand-green-500)
  );
  max-width: 29rem;
  color: var(--color-gray-10);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 1rem;
  border-radius: 0.6rem;
`;
const StyledSectionHeading = styled.div`
  text-transform: capitalize;
  font-size: 5rem;
  font-weight: 600;
  background: linear-gradient(
    90deg,
    var(--color-brand-blue-500),
    var(--color-brand-blue-100)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export default function SectionHeading() {
  return (
    <SectionHeadingParent>
      <HeadType>chargeup tech solutions</HeadType>
      <StyledSectionHeading>
        holistic approach to EV adoption
      </StyledSectionHeading>
    </SectionHeadingParent>
  );
}
