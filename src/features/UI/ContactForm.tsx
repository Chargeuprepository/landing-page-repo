import React, { type FormEvent } from "react";
import styled from "styled-components";

interface ContactFormProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 1rem;
  width: 90%;
  max-width: 500px;
  z-index: 1001;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.6rem;
  font-size: 1.4rem;
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.6rem;
  font-size: 1.4rem;
  resize: none;
  height: 100px;
`;

const SubmitButton = styled.button`
  padding: 1rem;
  background: linear-gradient(
    to right,
    var(--color-brand-blue-300),
    var(--color-brand-blue-600)
  );
  color: white;
  font-weight: 500;
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(
      to right,
      var(--color-brand-blue-200),
      var(--color-brand-blue-500)
    );
  }
`;

const ContactForm: React.FC<ContactFormProps> = ({ setOpen }) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setOpen(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const companyName = formData.get("company") as string;
    const email = formData.get("email") as string;
    const mobile = formData.get("mobile") as string;
    const description = formData.get("description") as string;

    console.log({ companyName, email, mobile, description });
    setOpen(false);
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <Modal>
        <StyledForm onSubmit={handleSubmit}>
          <></>
          <Input
            name="company"
            type="text"
            placeholder="Company Name"
            required
          />
          <Input name="email" type="email" placeholder="Email" required />
          <Input
            name="mobile"
            type="tel"
            placeholder="Mobile"
            required
            maxLength={10}
          />
          <TextArea name="description" placeholder="Description" required />
          <SubmitButton type="submit">Submit</SubmitButton>
        </StyledForm>
      </Modal>
    </Overlay>
  );
};

export default ContactForm;
