import styled from 'styled-components/macro';

export const Section = styled.section`
  display: grid;
  gap: 56px;
  grid-template-columns: 4fr 6fr;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  padding: 80px 104px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    padding: 40px;
    gap: 32px;
  }
  @media (max-width: 630px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 480px) {
    gap: 16px;
    padding: 24px 16px 128px;
  }
`;
export const Image = styled.img`
  max-width: 100%;
  border-radius: 50%;
  @media (max-width: 630px) {
    max-width: 304px;
    justify-self: center;
  }
  @media (max-width: 375px) {
    padding: 8px;
    max-width: 100%;
  }
`;
export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  padding-top: 40px;
  @media (max-width: 1024px) {
    padding-top: 0px;
  }
`;
export const Title = styled.h2`
  font-family: 'Roboto Slab', serif;
  font-weight: 400;
  font-size: 40px;
  line-height: 46px;
  margin-bottom: 24px;
  @media (max-width: 1024px) {
    font-size: 30px;
    line-height: 40px;
    margin-bottom: 16px;
  }
`;
export const Paragraph = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
  @media (max-width: 1024px) {
    font-size: 18px;
    line-height: 24px;
  }
`;
