import styled from 'styled-components/macro';

export const CardList = styled.div`
  display: grid;
  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  @media (max-width: 1024px) {
    gap: 8px;
  }
  @media (max-width: 670px) {
    /* grid-template-columns: 1fr 1fr; */
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;
