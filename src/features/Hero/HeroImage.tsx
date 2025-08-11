import styled from "styled-components";

const StyledHeroImage = styled.div`
  padding: 5rem 5rem 0rem 8rem;
`;
const StyledImage = styled.img``;

export default function HeroImage() {
  return (
    <StyledHeroImage>
      <StyledImage src="heroImage.png"></StyledImage>
    </StyledHeroImage>
  );
}
