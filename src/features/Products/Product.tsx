import styled from "styled-components";
import { FaArrowRightLong } from "react-icons/fa6";

const StyledProduct = styled.div`
  /* height: 40rem; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10rem;
`;
const TextParent = styled.div`
  h1 {
    font-size: 10rem;
    color: var(--color-gray-50);
    margin-bottom: -2rem;
  }
  h4 {
    font-size: 3rem;
    color: var(--color-brand-original-blue-400);
  }
  p {
    font-size: 1.6rem;
    color: var(--color-brand-blue-200);
    margin-top: 1rem;
  }
  div {
    display: flex;
    justify-content: end;
    padding-right: 3rem;
  }
  div a {
    text-transform: capitalize;
    border: none;
    font-size: 1.7rem;
    padding: 1.4rem 2rem;
    border-radius: 0.6rem;
    margin-top: 2rem;
    color: var(--color-gray-0);
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      to right,
      var(--color-brand-green-300),
      var(--color-brand-green-500)
    );
    transition: all 0.3s ease; /* <- this slows down hover changes */

    &:hover {
      background: linear-gradient(
        to right,
        var(--color-brand-original-green-400),
        var(--color-brand-green-600)
      );
    }
  }
`;
const ImageParent = styled.div``;
const Image = styled.img``;

export default function Product() {
  return (
    <>
      <StyledProduct>
        <TextParent>
          <h1>01</h1>
          <h4>Risk Engine</h4>
          <p>
            Risk engine is an advanced analytics platform that streamlines
            customer onboarding by generating a comprehensive risk score.
            derived from factors such as digital footprint, identity confidence,
            social footprint, and telecom risk, it enables smarter, faster, and
            more reliable decision-making.
          </p>
          <div>
            <a
              href={"https://underwrite.echargeup.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              click here
              <FaArrowRightLong></FaArrowRightLong>
            </a>
          </div>
        </TextParent>
        <ImageParent>
          <Image src="digitalUnderwriting.png"></Image>
        </ImageParent>
      </StyledProduct>
      <StyledProduct>
        <ImageParent>
          <Image src="batteryPulse.png"></Image>
        </ImageParent>
        <TextParent>
          <h1>02</h1>
          <h4>Digital Twin</h4>
          <p>
            Battery pulse is a smart battery intelligence platform designed to
            deeply monitor battery performance and lifecycle. it analyzes
            real-time data from all internal cells, tracks every activity, and
            provides actionable insights on health, efficiency, and faults. with
            built-in inventory management and usage analytics, battery pulse
            ensures optimal uptime and proactive maintenance for your battery
            ecosystem.
          </p>
          <div>
            <a
              href={"https://batterypulse.echargeup.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              click here
              <FaArrowRightLong></FaArrowRightLong>
            </a>
          </div>
        </TextParent>
      </StyledProduct>
      <StyledProduct>
        <TextParent>
          <h1>03</h1>
          <h4>Karma Index</h4>
          <p>
            Karma index is a dynamic performance metric that evaluates customer
            reliability by analyzing real-time driving behavior and payment
            discipline. it incorporates key indicators such as dpd, emi
            timeliness, vehicle usage, and earning-to-expense patterns. by
            blending behavioral and financial data, the karma index provides a
            holistic score that helps identify trustworthy and consistent
            customers.
          </p>
          <div>
            <a
              href={"https://underwrite.echargeup.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              click here
              <FaArrowRightLong></FaArrowRightLong>
            </a>
          </div>
        </TextParent>
        <ImageParent>
          <Image src="karma.png"></Image>
        </ImageParent>
      </StyledProduct>
    </>
  );
}
