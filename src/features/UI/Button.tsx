import React, { type Dispatch } from "react";
import styled from "styled-components";
import { FaArrowDownLong } from "react-icons/fa6";

const StyledButton = styled.button`
  border: none;
  border-radius: 1rem;
  padding: 1.4rem 2rem;
  background: linear-gradient(
    to right,
    var(--color-brand-green-300),
    var(--color-brand-green-600)
  );
  color: var(--color-gray-25);
  font-weight: 500;
  font-size: 1.6rem;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    color: var(--color-gray-0);
    box-shadow: 0 0.8rem 1.6rem rgba(0, 149, 60, 0.4);
  }

  &:active {
  }

  &:focus {
  }

  &:visited {
  }

  svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  svg &hover {
    color: var(--color-gray-0);
  }
`;
const StyledButtonSecond = styled.button`
  border: 2px solid var(--color-brand-green-500);
  border-radius: 1rem;
  padding: 1.4rem 2rem;
  background-color: var(--color-gray-0);

  color: var(--color-brand-green-500);
  font-weight: 500;
  font-size: 1.6rem;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    background-color: var(--color-gray-10);
    box-shadow: 0 0.8rem 1.6rem rgba(0, 149, 60, 0.4);
  }

  &:active {
  }

  &:focus {
  }

  &:visited {
  }

  svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  svg &hover {
    color: var(--color-gray-0);
  }
`;

interface MyComponentProps {
  children: React.ReactNode;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}

const Button = ({ children, setOpen }: MyComponentProps) => {
  return (
    <StyledButton onClick={() => setOpen((prev) => !prev)}>
      {children}
    </StyledButton>
  );
};

// interface ButtonSecondProps {
//   setOpen: Dispatch<React.SetStateAction<boolean>>;
// }

export function ButtonSecond({ handleScroll }: { handleScroll: any }) {
  return (
    <StyledButtonSecond onClick={handleScroll}>
      Learn More <FaArrowDownLong />
    </StyledButtonSecond>
  );
}

export default Button;
