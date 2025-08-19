import styled from "styled-components";

const StyledHeroImage = styled.div`
  padding: 2rem 6rem 100rem 8rem;
  width: 100%;
`;
const StyledImage = styled.img``;

export default function HeroImage() {
  return (
    <StyledHeroImage>
      <StyledImage src="heroImage.png"></StyledImage>
    </StyledHeroImage>
  );
}
