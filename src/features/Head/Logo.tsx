import styled from "styled-components";

const Img = styled.img`
  height: 7.5rem;
  /* width: 30rem; */
`;
const ImgWrapper = styled.div``;

export default function Logo() {
  return (
    <ImgWrapper>
      <Img src="logo-chargeup.png" />
    </ImgWrapper>
  );
}
