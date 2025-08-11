import styled from "styled-components";
import SectionHeading from "./SectionHeading";
import Product from "./Product";

const StyledProductsLayout = styled.div`
  /* background-color: beige; */
  /* border-top: 1px solid black; */
  padding: 4rem 15rem 0 15rem;
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;
const AllProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;
`;

export default function ProductsLayout({ sectionRef }: { sectionRef: any }) {
  return (
    <StyledProductsLayout ref={sectionRef}>
      <SectionHeading></SectionHeading>
      <AllProducts>
        <Product></Product>
      </AllProducts>
    </StyledProductsLayout>
  );
}
