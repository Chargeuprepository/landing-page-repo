import styled from "styled-components";
import Head from "./features/Head/Head";
import HeroLayout from "./features/Hero/HeroLayout";
import { useRef, useState } from "react";
import ContactForm from "./features/UI/ContactForm";
import ProductsLayout from "./features/Products/ProductsLayout";

const ParentWrapper = styled.div`
  position: relative;
  margin-bottom: 15rem;
`;
const BackImage = styled.img`
  position: absolute;
  transform: rotate(150deg);
  top: -20rem;
  left: -50%;
  z-index: -1000;
`;

export default function Parent() {
  const [open, setOpen] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null); // 👈 Type the ref

  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ParentWrapper>
      {open && <ContactForm setOpen={setOpen}></ContactForm>}
      <BackImage src="backDesign.jpeg"></BackImage>
      <Head setOpen={setOpen}></Head>
      <HeroLayout setOpen={setOpen} handleScroll={handleScroll}></HeroLayout>
      <ProductsLayout sectionRef={sectionRef}></ProductsLayout>
    </ParentWrapper>
  );
}
