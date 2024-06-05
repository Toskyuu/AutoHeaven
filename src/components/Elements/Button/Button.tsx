import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';

export const Button = ({
                         children,
                         ...rest
                       }: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.colors.buttons.primary};
  color: ${({ theme }) => theme.colors.buttonsText};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.colors.buttonsFontWeight};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  border: 1px solid transparent;
  justify-content: center;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttons.primaryHover};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.buttons.disabled};
    color: ${({ theme }) => theme.colors.text.dark};
    cursor: not-allowed;
  }
`;
