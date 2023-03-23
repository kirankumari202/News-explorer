import styled from 'styled-components/macro';

export const Overlay = styled.section<{ $how: boolean }>`
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 5;
  visibility: ${(props) => (props.$how ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.$how ? '1' : '0')};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: visibility 0.4s ease, opacity 0.4s ease;

  background: rgba(0, 0, 0, 0.5);

  @media (max-width: 480px) {
    align-items: flex-end;
  }
`;
export const ContentContainer = styled.div<{ $how: boolean }>`
  width: 100%;
  max-width: 430px;
  background-color: #fff;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  padding: 34px 36px 28px;
  display: flex;
  flex-direction: column;
  position: relative;
  opacity: ${(props) => (props.$how ? '1' : '0')};
  transition: opacity 0s ease;

  @media (max-width: 480px) {
    max-width: none;
    padding: 16px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const Close = styled.button<{ source: string }>`
  padding: 0;
  width: 40px;
  height: 40px;
  background-image: url(${(props) => props.source});
  background-position: center;
  background-size: cover;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: -40px;
  right: -40px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
    top: -36px;
    right: 16px;
  }
`;
