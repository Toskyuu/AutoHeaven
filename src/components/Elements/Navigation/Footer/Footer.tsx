import styled from 'styled-components';

export const Footer = () => {
  return (
      <FooterContainer>
          <TextContainer>
        Kacper Pietrzak, Robert Łaski - 2024
          </TextContainer>
      </FooterContainer>
  );
};


const FooterContainer = styled.footer`
  padding: 1rem 0;
  background: linear-gradient(to right, #66E2F4, #353E77);
  text-align: center;
  color:  ${({ theme }) => theme.colors.text.light};
  width: 100%;
`;

const TextContainer = styled.div`
  width: 60vw;
  text-align: right;
  margin: auto;
`;
