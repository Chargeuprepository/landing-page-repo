import styled from "styled-components";
import MainText from "./MainText";
import HeroImage from "./HeroImage";

const StyledHeroLayout = styled.div`
  height: calc(100vh - 8rem);
  padding: 2rem 0rem 0 15rem;
  display: flex;
`;

export default function HeroLayout({
  setOpen,
  handleScroll,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleScroll: any;
}) {
  return (
    <StyledHeroLayout>
      <MainText setOpen={setOpen} handleScroll={handleScroll}></MainText>
      <HeroImage></HeroImage>
    </StyledHeroLayout>
  );
}
