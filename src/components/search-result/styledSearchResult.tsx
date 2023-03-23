import styled from 'styled-components/macro';
import { keyframes } from 'styled-components';

export const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
 `;

export const Section = styled.section`
  background-color: #f5f6f7;
`;
export const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 104px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    padding: 0 40px;
  }
  @media (max-width: 480px) {
    padding: 0 16px;
  }
`;
export const StatusContainer = styled.div`
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding: 40px 0;
  }
  @media (max-width: 480px) {
    padding: 32px 0;
  }
`;
export const StatusText = styled.p`
  font-family: 'Roboto Slab', serif;
  font-weight: normal;
  font-size: 26px;
  line-height: 30px;
  text-align: center;
  color: #1a1b22;
  margin-bottom: 16px;
`;
export const StatusSubtext = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #b6bcbf;
  text-align: center;
`;
export const StatusImage = styled.img`
  width: 96px;
  height: 96px;
  margin-bottom: 24px;
`;

// This spinner is so cool
export const StatusSpinner = styled.div`
  display: block;
  border: double 1px transparent;
  border-radius: 50%;
  background-image: linear-gradient(#f5f6f7, #f5f6f7), conic-gradient(#f5f6f7, #1a1b22);
  background-origin: border-box;
  background-clip: content-box, border-box;
  width: 74px;
  height: 74px;
  opacity: 1;
  animation: ${spin} 1s infinite linear;
  margin-bottom: 24px;
`;
