import styled from 'styled-components/macro';

export const Container = styled.div`
  padding: 80px 0px;
  @media (max-width: 1024px) {
    padding: 40px 0px;
  }

  @media (max-width: 480px) {
    padding: 32px 0px;
  }
`;
export const Heading = styled.h2`
  font-family: 'Roboto Slab', serif;
  font-weight: 400;
  font-size: 40px;
  line-height: 46px;
  margin-bottom: 64px;
  @media (max-width: 1024px) {
    font-size: 30px;
    line-height: 34px;
    margin-bottom: 32px;
  }

  @media (max-width: 480px) {
    margin-bottom: 58px;
  }
`;
export const Term = styled.span`
  font-weight: 900;
  color: #b6bcbf;
`;

export const ShowMore = styled.button`
  cursor: pointer;
  display: block;
  background-color: #fff;
  border-radius: 80px;
  border: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  padding: 20px 98px;
  margin: 64px auto 0;
  color: #1a1b22;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: #e8e8e8;
  }

  &:disabled {
    background-color: #e6e8eb;
    color: #b6bcbf;
    cursor: auto;
  }

  @media (max-width: 1024px) {
    padding: 16px 74px;
    margin: 32px auto 0;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;
