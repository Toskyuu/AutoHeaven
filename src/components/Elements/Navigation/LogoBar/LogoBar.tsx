import styled from 'styled-components';
import Logo from "../../LandingPage/Logo/Logo.tsx";

export const LogoBar = () => {
    return (
        <LogoBarContainer>
            <Logo />
        </LogoBarContainer>
    );
};


const LogoBarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  background: ${({ theme }) => theme.colors.background};
  width: 100%;
  margin: 0;
`;

