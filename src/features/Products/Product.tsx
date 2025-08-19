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
  h4 span {
    text-transform: capitalize;
    font-size: 1.4rem;
    color: var(--color-brand-green-100);
    font-weight: 400;
    /* padding-left: 1rem; */
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
const Text = styled.div`
  font-size: 1.6rem;
  color: var(--color-brand-blue-200);
  margin-top: 1rem;
  font-weight: 400;
`;
const ImageParent = styled.div``;
const Image = styled.img``;

export default function Product() {
  return (
    <>
      <StyledProduct>
        <TextParent>
          <h1>01</h1>
          <h4>
            Risk Engine <span>(digital underwriting)</span>
          </h4>
          <Text>
            Risk engine is an advanced analytics platform that streamlines
            customer onboarding by generating a comprehensive risk score.
            Derived from factors such as digital footprint, identity confidence,
            social footprint, and telecom risk. It enables smarter, faster, and
            more reliable decision-making.
          </Text>
          <div>
            <a
              href={"https://underwrite.echargeup.com/verification"}
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
          <h4>
            Digital Twin <span>(battery pulse)</span>
          </h4>
          <Text>
            Digital Twin is a smart battery intelligence platform designed to
            deeply monitor battery performance and lifecycle. It analyzes
            real-time data from all internal cells, tracks every activity, and
            provides actionable insights on health, efficiency, and faults. With
            built-in inventory management and usage analytics, battery pulse
            ensures optimal uptime and proactive maintenance for your battery
            ecosystem.
          </Text>
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
          <h4>
            Karma Index <span>(behavioral analytics)</span>
          </h4>
          <Text>
            Karma index is a dynamic performance metric that evaluates customer
            reliability by analyzing real-time driving behavior and payment
            discipline. It incorporates key indicators such as dpd, emi
            timeliness, vehicle usage, and earning-to-expense patterns. By
            blending behavioral and financial data, the karma index provides a
            holistic score that helps identify trustworthy and consistent
            customers.
          </Text>
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
      <StyledProduct>
        <ImageParent>
          <Image src="service.png"></Image>
        </ImageParent>
        <TextParent>
          <h1>04</h1>
          <h4>
            AI Genie <span>(pro-active service maintenance)</span>
          </h4>
          <Text>
            Service AI Genie is a performance intelligence module that measures
            the efficiency and reliability of after-sales service. It tracks key
            metrics such as turnaround time (TAT) for service engineers and
            drivers, resolution rates and types, recurrence of faults, run
            kilometers, and fault trends. Leveraging predictive alerts from our
            advanced models, Service Gini enables proactive maintenance, reduces
            downtime, and ensures faster resolutions — driving higher
            reliability and customer satisfaction.
          </Text>
          <div>
            <a
              href={"https://underwrite.echargeup.com/service"}
              target="_blank"
              rel="noopener noreferrer"
            >
              click here
              <FaArrowRightLong></FaArrowRightLong>
            </a>
          </div>
        </TextParent>
      </StyledProduct>
    </>
  );
}
