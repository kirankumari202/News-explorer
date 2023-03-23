import styled from 'styled-components/macro';
import hero from '../../images/hero.png';

type FocusedProp = {
  $focused: boolean
}

type ValidProp = {
  $isValid: boolean
}

export const Section = styled.section`
  background-image: url(${hero});
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 160px 0 80px;
  @media (max-width: 1024px) {
    padding: 104px 0 48px;
  }
  @media (max-width: 768px) {
    padding: 86px 16px 32px;
  }
`;

export const Content = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 608px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    max-width: 452px;
  }
`;

export const TextWrapper = styled.div<FocusedProp>`
  // test
  max-height: ${({ $focused }) => ($focused ? '0px' : '300px')};
  opacity: ${({ $focused }) => ($focused ? '0' : '1')};
  transition: max-height 0.7s ease, opacity 0.7s ease;
`;

export const Title = styled.h1`
  font-family: 'Roboto Slab', serif;
  font-weight: 400;
  font-size: 60px;
  line-height: 64px;
  color: #fff;
  width: 100%;
  text-align: left;
  padding-bottom: 32px;

  @media (max-width: 1024px) {
    font-size: 36px;
    line-height: 40px;
    padding-bottom: 16px;
  }
`;
export const Subtitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
  width: 100%;
  padding-bottom: 88px;

  @media (max-width: 1024px) {
    font-size: 18px;
    line-height: 24px;
    padding-bottom: 48px;
  }
`;

export const Form = styled.form`
  font-family: 'Roboto', sans-serif;
  width: 100%;
  display: flex;
  border-radius: 100px;
  overflow: show;
  background-color: #fff;
  outline: none;
  border: 1px solid #d1d2d6;
  backdrop-filter: blur(8px);
  position: relative;
  box-sizing: content-box;

  @media (max-width: 768px) {
    flex-direction: column;
    border-radius: 0;
    background-color: transparent;
    border: none;
    backdrop-filter: none;
  }
`;
export const Input = styled.input<ValidProp>`
  width: 100%;
  padding: 21px 24px;
  outline: none;
  border: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  border-radius: 100px;

  // handle empty input with custom placeholder color
  &::placeholder {
    color: ${(props) => (props.$isValid ? 'auto' : '#FF0000')};
  }
  @media (max-width: 1024px) {
    padding: 16px 24px;
  }
  @media (max-width: 768px) {
    margin-bottom: 16px;
    padding: 16px 16px;
  }
`;
export const Button = styled.button`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  padding: 20px 56px;
  background-color: #2f71e5;
  border: 1px solid #2f71e5;
  color: #fff;
  border-radius: 100px;
  outline: none;
  cursor: pointer;
  box-shadow: 0px 5px 15px rgba(14, 26, 57, 0.2);
  transition: background-color 0.15s ease, border 0.15s ease;
  position: absolute;
  top: -1px;
  right: -1px;

  &:hover {
    background-color: #347eff;
    border: 1px solid #347eff;
  }
  &:focus {
    background-color: #2a65cc;
    border: 1px solid #2a65cc;
  }
  @media (max-width: 1024px) {
    padding: 15px 52px;
  }
  @media (max-width: 768px) {
    position: relative;
    padding: 16px;
  }
`;
