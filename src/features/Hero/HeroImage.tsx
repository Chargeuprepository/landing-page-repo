import styled from "styled-components";

const StyledHeroImage = styled.div`
  padding: 4rem 10rem 0rem 6rem;
  width: 50%;
`;
const StyledImage = styled.img``;

export default function HeroImage() {
  return (
    <StyledHeroImage>
      <StyledImage src="heroImage.png"></StyledImage>
    </StyledHeroImage>
  );
}
