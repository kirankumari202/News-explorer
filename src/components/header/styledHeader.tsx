import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import close from '../../images/close.svg';
import logout from '../../images/logout-light.svg';

interface OpenProp {
  $isOpen: boolean;
}
interface ActiveProp {
  $active: boolean;
}
interface WideProp {
  wide: boolean;
}

// overlay only to appear on mobile screens
export const Overlay = styled.div<OpenProp>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  @media (max-width: 580px) {
    display: block;
    background-color: #000000;
    visibility: ${(OpenProp) => (OpenProp.$isOpen ? 'visible' : 'hidden')};
    opacity: ${(OpenProp) => (OpenProp.$isOpen ? '.5' : '0')};
    transition: visibility 0.3s ease, opacity 0.3s ease;
  }
`;

export const Section = styled.header<OpenProp>`
  position: ${(OpenProp) => OpenProp.theme.position};
  background: ${(OpenProp) => OpenProp.theme.background};
  box-shadow: ${(OpenProp) => OpenProp.theme.shadow};
  width: 100%;
  z-index: 5;

  @media (max-width: 580px) {
    position: absolute;
    box-shadow: none;
  }
`;

export const Container = styled.div<OpenProp>`
  padding: 0 104px;
  margin: 0 auto;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1024px) {
    padding: 0 40px;
  }

  @media (max-width: 580px) {
    flex-direction: column;
    padding: 0;
    background: ${(OpenProp) => (OpenProp.$isOpen ? '#1A1B22' : OpenProp.theme.background)};
    transition: background-color 0.3s ease, border-radius 0.3s ease;
    border-bottom-left-radius: ${(OpenProp) => (OpenProp.$isOpen ? '38px' : '0')};
    border-bottom-right-radius: ${(OpenProp) => (OpenProp.$isOpen ? '38px' : '0')};
  }
`;

export const Wrapper = styled.div<OpenProp>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 580px) {
    width: 100%;
    padding: 16px;
    transition: box-shadow 0.3s ease;
    box-shadow: ${(OpenProp) =>
      OpenProp.$isOpen ? 'inset 0px -1px 0px rgba(255, 255, 255, 0.2)' : 'inset 0px -1px 0px #D1D2D6'};
  }
`;

export const Logo = styled(Link)<OpenProp>`
  font-family: 'Roboto Slab', serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-decoration: none;
  color: ${(OpenProp) => OpenProp.theme.primary};
  transition: color 0.15s ease;

  &:hover {
    color: ${(OpenProp) => OpenProp.theme.secondary};
  }

  @media (max-width: 580px) {
    font-size: 16px;
    line-height: 24px;
    color: ${(OpenProp) => (OpenProp.$isOpen ? '#fff' : 'OpenProp.theme.primary')};
  }
`;

export const MenuToggle = styled.button<OpenProp>`
  background-image: url(${({ theme, $isOpen }) => ($isOpen ? close : theme.hamburger)});
  background-size: contain;
  background-position: center;
  background-color: transparent;
  width: 24px;
  height: 24px;
  cursor: pointer;
  padding: 0;
  border: none;
  display: none;

  @media (max-width: 580px) {
    display: block;
  }
`;

export const Nav = styled.nav<OpenProp>`
  display: flex;
  align-items: center;

  @media (max-width: 580px) {
    max-height: ${(OpenProp) => (OpenProp.$isOpen ? '250px' : '0')};
    opacity: ${(OpenProp) => (OpenProp.$isOpen ? '1' : '0')};
    overflow: hidden;
    transition: max-height 0.3s ease, opacity 0.15s ease, padding 0.3s ease;
    width: 100%;
    padding: ${(OpenProp) => (OpenProp.$isOpen ? '16px 16px 16px' : '0')};
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const NavLink = styled(Link)<ActiveProp>`
  border-bottom: ${(OpenProp) => (OpenProp.$active ? `3px solid ${OpenProp.theme.primary}` : 'none')};
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-decoration: none;
  color: ${(OpenProp) => (OpenProp.$active ? OpenProp.theme.primary : OpenProp.theme.secondary)};
  padding: 0px 10px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 34px;
  height: 80px;
  box-sizing: border-box;
  transition: color 0.15s ease;

  &:hover {
    color: ${(OpenProp) => OpenProp.theme.primary};
  }
  @media (max-width: 1024px) {
    font-size: 16px;
    margin-right: 20px;
    height: 66px;
  }

  @media (max-width: 580px) {
    margin-right: 0;
    border: none;
    height: 56px;
    color: #fff;
    font-size: 18px;
    line-height: 56px;
    justify-content: flex-start;

    &:last-of-type {
      margin-bottom: 12px;
    }
  }
`;
export const Button = styled.button<WideProp>`
  background-color: transparent;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  border: 1px solid ${(OpenProp) => OpenProp.theme.tertiary};
  color: ${(OpenProp) => OpenProp.theme.primary};
  border-radius: 100px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border 0.15s ease;
  min-width: ${(OpenProp) => (OpenProp.wide ? '176px' : '0')};

  &:hover {
    border: 1px solid ${(OpenProp) => OpenProp.theme.primary};
  }
  @media (max-width: 1024px) {
    font-size: 16px;
    padding: 8px 12px;
    min-width: ${(OpenProp) => (OpenProp.wide ? '152px' : '0')};
  }

  @media (max-width: 580px) {
    padding: 16px;
    font-size: 18px;
    color: #fff;
  }
`;

export const Logout = styled.div`
  width: 24px;
  height: 24px;
  margin-left: 16px;
  background-image: url(${(OpenProp) => OpenProp.theme.logout});
  background-size: cover;
  background-position: center;

  @media (max-width: 580px) {
    background-image: url(${logout});
  }
`;
