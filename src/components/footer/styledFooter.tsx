import styled from 'styled-components/macro';

type Props = {
  area: string
}

type IconProps = Props &  { 
  icon: string
}

export const Section = styled.footer`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 32px 104px 26px;
  max-width: 1440px;

  @media (max-width: 1024px) {
    padding: 20px 40px;
  }

  @media (max-width: 480px) {
    padding: 20px 16px 22px;
    flex-direction: column-reverse;
  }
`;
export const Copyright = styled.p`
  color: #b6bcbf;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
`;
export const Nav = styled.nav`
  display: grid;
  gap: 26px;
  grid-template-columns: repeat(4, min-content);
  @media (max-width: 480px) {
    margin-bottom: 38px;
    grid-template-columns: repeat(6, 1fr);
    grid-template-areas:
      'H H H H G L'
      'P P P P P P';
  }
`;

export const TextLink = styled.a<Props>`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #1a1b22;
  text-decoration: none;
  @media (max-width: 480px) {
    grid-area: ${(props) => props.area};
  }
`;
export const IconLink = styled.a<IconProps>`
  display: block;
  background-image: url(${(props) => props.icon});
  width: 24px;
  height: 24px;
  background-position: center;
  background-size: cover;
  @media (max-width: 480px) {
    grid-area: ${(props) => props.area};
  }
`;
