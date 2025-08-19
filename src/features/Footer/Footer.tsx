import styled from "styled-components";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";

const FooterContainer = styled.footer`
  margin-top: 10rem;
  height: 50rem;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;
  padding: 0 2rem 2rem 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

const FooterLeft = styled.div`
  background: linear-gradient(
      45deg,
      rgba(0, 52, 69, 0.2),
      rgba(0, 149, 60, 0.2)
    ),
    url("/footer.png") center/cover no-repeat;
  flex: 1;
  min-width: 25rem;
  border-radius: 1.6rem;
`;

const FooterRight = styled.div`
  /* background-color: var(--color-gray-10); */
  background: linear-gradient(
    to right,
    var(--color-brand-original-blue-400),
    var(--color-brand-blue-700)
  );
  border-radius: 1.6rem;
  flex: 2;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  padding-left: 4rem;
  padding-top: 6rem;
  gap: 1rem;
`;

const Tagline = styled.h2`
  font-size: 2.1rem;
  font-weight: 600;
  margin-bottom: 2rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: var(--color-brand-green-200);
`;

const Info = styled.p`
  font-size: 1.5rem;
  margin: 0.2rem 0;
  color: var(--color-gray-100);
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    color: var(--color-gray-100);
    height: 1.6rem;
    width: 1.6rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;

  a {
    color: var(--color-gray-200);
    font-size: 3rem;
    transition: color 0.3s ease;

    &:hover {
      color: #00953c;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft></FooterLeft>

      <FooterRight>
        <Tagline>Empowering E-Mobility with Smart Energy Solutions</Tagline>
        <Info>
          <IoLocationSharp></IoLocationSharp> Address: 300/3, 1st Floor, MG
          Road, Sultanpur, New Delhi – 110030
        </Info>
        <Info>
          <FaPhoneAlt></FaPhoneAlt> Phone: 18001230181
        </Info>
        <Info>
          <MdAlternateEmail></MdAlternateEmail> Email: info@echargeup.com
        </Info>
        <SocialIcons>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </SocialIcons>
      </FooterRight>
    </FooterContainer>
  );
};

export default Footer;
