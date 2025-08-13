import styled from "styled-components";
import Logo from "./Logo";
import Button from "../UI/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa";

interface itemsprops {
  padding?: string;
}

const HeadWrapper = styled.div`
  height: 8rem;
  padding: 0.6rem 10rem 0 25rem;
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  gap: 4rem;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 6rem;
  /* background-color: aqua; */
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 5rem;
  /* background-color: #ddff00; */
`;
const Items = styled.a<itemsprops>`
  text-transform: capitalize;
  font-size: 1.7rem;
  color: var(--color-brand-blue-300);
  font-weight: 500;
  padding: ${(props) => props.padding};

  &:hover {
    color: var(--color-brand-blue-500);
  }

  svg {
    height: 3.6rem;
    width: 3.6rem;
    color: var(--color-brand-blue-300);
  }

  svg &:hover {
    color: var(--color-brand-blue-500);
  }
`;

export default function Head({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <HeadWrapper>
      <Left>
        <Logo></Logo>
        <Items
          href={"https://underwrite.echargeup.com/verification"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Risk Engine
        </Items>
        <Items
          href={"https://batterypulse.echargeup.com/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Digital Twin
        </Items>
        <Items
          href={"https://underwrite.echargeup.com/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Karma Index
        </Items>
      </Left>
      <Right>
        <Items
          href={
            "https://play.google.com/store/apps/details?id=com.chargeup.isourse&pcampaignid=web_share"
          }
          target="_blank"
          rel="noopener noreferrer"
          padding={"0.6rem 0 0 0"}
        >
          <FaGooglePlay></FaGooglePlay>
        </Items>
        <Button setOpen={setOpen}>
          Contact Us <FaArrowRightLong></FaArrowRightLong>
        </Button>
      </Right>
    </HeadWrapper>
  );
}
