import styled from 'styled-components/macro';

export const Form = styled.form<{ $how: boolean }>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-height: ${(props) => (props.$how ? '400px' : '0')};
  visibility: ${(props) => (props.$how ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.$how ? '1' : '0')};
  transition: opacity 0.5s ease, visibility 0.5s ease;
`;

export const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 24px;
  line-height: 28px;

  color: #1a1b22;
  margin: 0;
  margin-bottom: 22px;
`;
export const Input = styled.input`
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  outline: none;
  background-color: none;
  padding: 0 0 9px;

  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  margin: 0;
  margin-bottom: 2px;
  transition: border-bottom 0.1s ease;

  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }

  &:focus {
    border-bottom: 1px solid rgba(0, 0, 0, 1);
  }
`;
export const Label = styled.label`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #2f71e5;
  margin: 0;
  margin-bottom: 10px;
`;
export const Error = styled.span<{ align?: string; bottom?: string }>`
  font-family: 'Inter', sans-serif;
  min-height: 15px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: ${(props) => props.align};

  color: #ff0000;
  margin: 0;
  margin-bottom: ${(props) => props.bottom};
`;
export const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  width: 100%;
  color: #fff;
  padding: 20px 0;
  border: none;
  background: #2f71e5;
  box-shadow: 0px 5px 15px rgba(14, 26, 57, 0.2);
  border-radius: 100px;
  margin-bottom: 16px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #347eff;
  }

  &:active {
    background-color: #2a65cc;
  }

  &:disabled {
    background-color: #e6e8eb;
    box-shadow: none;
    color: #b6bcbf;
  }
`;
export const Option = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  width: 100%;
`;

export const OptionButton = styled.button`
  margin-left: 0.25em;
  color: #2f71e5;
  padding: 0;
  border: none;
  cursor: pointer;
  background-color: transparent;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;
