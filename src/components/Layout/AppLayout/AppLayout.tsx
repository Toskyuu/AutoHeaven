import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { Footer} from "../../Elements/Navigation/Footer";
import { Navbar } from "../../Elements/Navigation/Navbar";

export const AppLayout = () => {
  return (
    <Container>
      <InterContainer>
        <Navbar />
        <MainComponent>
          <Outlet />
        </MainComponent>
      </InterContainer>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const InterContainer = styled.div`
  display: flex;
  flex: 1 1 0;
  width: 100%;
  overflow: hidden;
`;

const MainComponent = styled.main`
  overflow-y: auto;
  padding: 2rem;
  width: 100%;
  
`;
