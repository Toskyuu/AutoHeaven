import React from 'react';
import styled from 'styled-components';

import { Footer } from "../../Navigation/Footer";
import {LogoBar} from "../../Navigation/LogoBar";
import {Navbar} from "../../Navigation/Navbar";
import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <Container>
          <Link to={'/'} ><LogoBar/></Link>
          <Navbar/>
        <LayoutStyled>{children}</LayoutStyled>
          <Footer />
      </Container>
    </>
  );
};

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 20px;
  width: 100%;
  flex: 1;
`;

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  color: ${({ theme }) => theme.colors.text.light};  
`;
export default Layout;
