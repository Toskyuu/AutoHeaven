import { useState } from 'react';
import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

import {
  Container,
  LabelText,
  StyledError
} from "../StyledElements.tsx";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label: string;
  error?: string;
}

export const TextInput = ({ label, error, ...rest }: InputProps) => {
  const [value, setValue] = useState('+48');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue.startsWith('+48')) {
      setValue(inputValue);
    } else {
      setValue('+48' + inputValue.replace(/^\+48/, ''));
    }
  };

  return (
    <Container>
      <LabelText>{label}</LabelText>
      <StyledInput
        aria-invalid={error ? 'true' : 'false'}
        value={value}
        onChange={handleChange}
        {...rest}
      />
      <StyledError>{error}</StyledError>
    </Container>
  );
};

const StyledInput = styled.input`
  width: 100%;
  height: 3rem;
  color: ${({ theme }) => theme.colors.text.dark};
  background-color: ${({ theme }) => theme.colors.input};
  font-size: 1rem;
  padding: 0.5rem 0.75rem;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.elements.light};
  border-radius: 0;
  &:focus,
  &:hover {
    border-color: ${({ theme }) => theme.colors.elements.dark};
    outline: none;
  }
  &:invalid {
    border-color: ${({ theme }) => theme.colors.buttons.danger};
  }
`;
