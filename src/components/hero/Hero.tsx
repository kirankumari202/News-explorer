import React from 'react';
import { Section, Content, TextWrapper, Title, Subtitle, Form, Input, Button } from './styledHero';

type Props = {
  submitSearch: Function;
  searchTerm: string;
  setSearchTerm: Function;
  searched: boolean;
};

export default function Hero({
  submitSearch,
  searchTerm,
  setSearchTerm,
  searched,
}: Props): JSX.Element {
  const [searchPlaceholder, setSearchPlaceholder] = React.useState('Enter topic');
  const [isSearchValid, setIsSearchValid] = React.useState(true);

  function handleBlur() {
    // reset placeholder display
    setSearchPlaceholder('Enter topic');
    setIsSearchValid(true);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { value } = e.target as HTMLInputElement;
    // capitalize the first letter of the search
    setSearchTerm(`${value.charAt(0).toUpperCase()}${value.slice(1)}`);
  }

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>): void {
    e.preventDefault();
    // validate input
    if (searchTerm === '') {
      // if input is empty, adjust placeholder text
      setSearchPlaceholder('Please enter a keyword');
      // set placeholder text to red
      setIsSearchValid(false);
      return;
    }
    submitSearch(searchTerm);
  }

  return (
    <Section>
      <Content>
        <TextWrapper $focused={searched}>
          <Title>What's going on in the world?</Title>
          <Subtitle>
            Find the latest news on any topic and save them in your personal account.
          </Subtitle>
        </TextWrapper>
        <Form onSubmit={handleSubmit} onBlur={handleBlur} noValidate>
          <Input
            onChange={handleChange}
            placeholder={searchPlaceholder}
            $isValid={isSearchValid}
            value={searchTerm}
          />
          <Button type="submit">Search</Button>
        </Form>
      </Content>
    </Section>
  );
}
