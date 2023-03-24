import linkedin from '../../images/linkedin.svg';
import github from '../../images/github.svg';
import { Section, Nav, TextLink, IconLink } from './styledFooter';
import { newsApi } from '../../utils/NewsApi';

export default function Footer(): JSX.Element {
  return (
    <Section>
      
      <Nav>
        <TextLink area="H" href="/news-explorer-frontend/">
          Home
        </TextLink>
        <IconLink
          area="G"
          href="https://github.com/kirankumari202"
          rel="noopener"
          target="_blank"
          aria-label="View source code on Github"
          icon={github}
        />
        <IconLink
          area="L"
          href="https://www.linkedin.com/in/kiran-kumari-102a631b7/"
          rel="noopener"
          target="_blank"
          aria-label="Visit Jakes linkedIn"
          icon={linkedin}
        />
      </Nav>
    </Section>
  );
}
