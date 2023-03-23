import logoutDark from '../../images/logout-dark.svg';
import logoutLight from '../../images/logout-light.svg';
import menuLight from '../../images/menu-light.svg';
import menuDark from '../../images/menu-dark.svg';

type Theme = {position: string, primary: string, secondary: string, tertiary: string, background: string, logout: string, shadow: string, hamburger: string}

// header themes for home page
export const homeTheme: Theme = {
  position: 'absolute',
  primary: '#FFFFFF',
  secondary: '#B6BCBF',
  tertiary: '#FFFFFF',
  background: 'rgba(255, 255, 255, 0)',
  logout: logoutLight,
  shadow: 'inset 0px -1px 0px rgba(255, 255, 255, 0.2)',
  hamburger: menuLight,
};

// header themes for saved article page
export const savedArticleTheme: Theme = {
  position: 'static',
  primary: '#1A1B22',
  secondary: '#1A1B22',
  tertiary: '#D1D2D6',
  background: 'rgba(255, 255, 255, 1)',
  logout: logoutDark,
  shadow: 'inset 0px -1px 0px rgba(209, 210, 214, 1);',
  hamburger: menuDark,
};
