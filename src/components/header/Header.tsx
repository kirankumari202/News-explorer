import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { homeTheme, savedArticleTheme } from '../style/ThemeStyles';
import { UserContext } from '../../contexts/UserContext';

import {
  Overlay,
  Section,
  Container,
  Wrapper,
  MenuToggle,
  Logo,
  Nav,
  NavLink,
  Button,
  Logout,
} from './styledHeader';

type Props = {
  loggedIn: boolean;
  // setLoggedIn: (loggedIn: boolean) => void,
  setShowSignIn: (showSignIn: boolean) => void;
  handleLogout: () => void;
};

export default function Header({ loggedIn, setShowSignIn, handleLogout }: Props): JSX.Element {
  const location = useLocation().pathname.substring(1);
  const [isOpen, setIsOpen] = useState(false);
  const currentUser: { name: string; email: string } | null = React.useContext(UserContext);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <ThemeProvider theme={location === 'saved-news' ? savedArticleTheme : homeTheme}>
      <Section $isOpen={isOpen}>
        <Container $isOpen={isOpen}>
          <Wrapper $isOpen={isOpen}>
            <Logo $isOpen={isOpen} to="/">
              NewsExplorer
            </Logo>
            <MenuToggle onClick={() => setIsOpen(!isOpen)} $isOpen={isOpen} />
          </Wrapper>
          <Nav $isOpen={isOpen} onClick={closeMenu}>
            <NavLink to="/" $active={location === ''}>
              Home
            </NavLink>
            {loggedIn && (
              <NavLink to="/saved-news" $active={location === 'saved-news'}>
                Saved articles
              </NavLink>
            )}
            {!loggedIn && (
              <Button type="button" wide={true} onClick={() => setShowSignIn(true)}>
                Sign in
              </Button>

          
            )}
            {loggedIn && (
              <Button wide={false} onClick={handleLogout}>
                {currentUser && currentUser.name}
                <Logout />
              </Button>
            )}
          </Nav>
        </Container>
        <Overlay $isOpen={isOpen} onClick={closeMenu} />
      </Section>
    </ThemeProvider>
  );
}
