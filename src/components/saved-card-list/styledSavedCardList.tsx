import styled from 'styled-components/macro';

export const Section = styled.section`
  background: #f5f6f7;
`;

export const Container = styled.div`
  padding: 62px 106px;
  max-width: 1440px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    padding: 32px 40px;
  }

  @media (max-width: 480px) {
    padding: 24px 16px;
  }
`;
