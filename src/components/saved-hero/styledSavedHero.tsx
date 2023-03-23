import styled from 'styled-components/macro';

export const Section = styled.section`
  background: #fff;
  max-width: 1440px;
  padding: 40px 104px 56px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    padding: 24px 40px 32px;
  }

  @media (max-width: 480px) {
    padding: 64px 16px 32px;
  }
`;
export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: rgba(26, 27, 34, 0.5);
  margin-bottom: 28px;
  @media (max-width: 1024px) {
    font-size: 14px;
    margin-bottom: 16px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
export const Greeting = styled.h2`
  font-family: 'Roboto Slab', serif;
  font-weight: 400;
  font-size: 40px;
  line-height: 46px;
  max-width: 530px;
  color: #1a1b22;
  margin-bottom: 30px;
  @media (max-width: 1024px) {
    font-size: 30px;
    line-height: 34px;
    max-width: 340px;
    margin-bottom: 16px;
  }

  @media (max-width: 480px) {
    margin-bottom: 50px;
  }
`;
export const Keywords = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #1a1b22;
`;
export const List = styled.span`
  font-weight: 700;
  /* text-transform: capitalize; */
`;
