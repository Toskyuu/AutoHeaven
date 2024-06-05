import styled from 'styled-components';
import img from '../../../../assets/logo.png'

const Logo = () => {
  return <LogoStyled src={img} alt="Logo AutoHeaven"  />;
};

const LogoStyled = styled.img`
  width: auto;
  height: 5rem;
`;

export default Logo;
