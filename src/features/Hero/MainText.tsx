import styled from "styled-components";
import Button, { ButtonSecond } from "../UI/Button";

interface TextWordProps {
  padding?: string;
}

const StyledMainText = styled.div`
  padding: 8rem 0 0 0rem;
  max-width: 65rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  /* background-color: aqua; */
`;
const MainTextHeading = styled.div`
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
`;
const TextWord = styled.h1<TextWordProps>`
  font-size: 5rem;
  margin: -0.5rem;
  padding: ${(props) => props.padding};

  background: linear-gradient(
    90deg,
    var(--color-brand-blue-800),
    var(--color-brand-blue-200)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: t;

  span {
    font-style: italic;
    font-size: 5.4rem;
  }
`;
const Para = styled.div`
  font-size: 1.75rem;
  font-weight: 500;
  color: var(--color-brand-blue-200);
`;
const ButtonArea = styled.div`
  margin-top: 2rem;
  padding-right: 3rem;
  display: flex;
  justify-content: end;
  gap: 1.5rem;
`;

export default function MainText({
  setOpen,
  handleScroll,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleScroll: any;
}) {
  return (
    <StyledMainText>
      <MainTextHeading>
        {/* <TextWord>One-Stop Solution</TextWord> */}
        <TextWord>
          Full Stack <span>AI/ML</span> Platform For Finance & Asset
        </TextWord>
        <TextWord padding={"0 0 0 0rem"}>Management</TextWord>
      </MainTextHeading>

      <Para>
        This platform offers a seamless blend of financial services, asset
        management, and technology. Integrated with NBFCs, OEMs, and dealers, it
        simplifies complex operations into one unified solution.
      </Para>

      <ButtonArea>
        <Button setOpen={setOpen}>Manage Your Business</Button>
        <ButtonSecond handleScroll={handleScroll}></ButtonSecond>
      </ButtonArea>
    </StyledMainText>
  );
}
