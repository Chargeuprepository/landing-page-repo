import styled from "styled-components";
import { FaArrowRightLong } from "react-icons/fa6";

const StyledProduct = styled.div`
  /* height: 40rem; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10rem;
`;
const TextParent = styled.div`
  text-transform: capitalize;
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
          <h4>digital underwriting</h4>
          <p>
            Digital Underwriting is an advanced analytics platform that monitors
            EV drivers by aggregating their credit data, risk scores, karma
            ratings, EMI records, run kilometers, and service history. It offers
            real-time insights, including location tracking and performance
            dashboards, providing a complete view of driver behavior and
            reliability for smarter decision-making.
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
          <Image src="digitalUnderwriting.png"></Image>
        </ImageParent>
      </StyledProduct>
      <StyledProduct>
        <ImageParent>
          <Image src="batteryPulse.png"></Image>
        </ImageParent>
        <TextParent>
          <h1>02</h1>
          <h4>battery pulse</h4>
          <p>
            Battery Pulse is a smart battery intelligence platform designed to
            deeply monitor battery performance and lifecycle. It analyzes
            real-time data from all 16 internal cells, tracks every activity,
            and provides actionable insights on health, efficiency, and faults.
            With built-in inventory management and usage analytics, Battery
            Pulse ensures optimal uptime and proactive maintenance for your
            battery ecosystem.
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
    </>
  );
}
