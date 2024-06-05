import styled from 'styled-components';
import {Button} from "../../Button/Button.tsx";
import {Link} from "react-router-dom";

export const Navbar = () => {
  return (
      <NavbarContainer>
          <ButtonContainer>
        <ButtonGroup>
          <Button>Dodaj ogłoszenie</Button>
        </ButtonGroup>
        <ButtonGroup>
            <Link to={'/auth/login'}><Button>Zaloguj się</Button></Link>
            <Link to={'/auth/register'}><Button>Zarejestruj się</Button></Link>
        </ButtonGroup>
          </ButtonContainer>
      </NavbarContainer>
  );
};


const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  background: linear-gradient(to right, #66E2F4, #353E77);
  width: 100%;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;
const ButtonContainer = styled.div`
  width: 60vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;
