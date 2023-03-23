import React from 'react';
import NewsCard from '../news-card/NewsCard';
import { CardList } from '../shared/styledCardList';
import { Container, Heading, ShowMore, Term } from './styledNewsCardList';
import { Article, SavedArticle } from '../../types/types';

type Props = {
  searchResults: Article[] | [];
  loggedIn: boolean;
  keyword: string;
  switchModals: (role: string) => void;
  savedArticles: SavedArticle[] | [];
  getSavedArticles: () => void;
  searched: boolean;
};

export default function NewsCardList({
  searchResults,
  loggedIn,
  keyword,
  switchModals,
  savedArticles,
  getSavedArticles,
  searched,
}: Props): JSX.Element {
  const [isShown, setIsShown] = React.useState<boolean>(true);
  // initial display amount (6) will look good on a grid with 3, 2, or 1 columns. TODO change back after review
  const [displayAmount, setDisplayAmount] = React.useState<number>(6);

  // expand the display of articles shown
  function handleShowMore(): void {
    setDisplayAmount(displayAmount + 6);
  }

  // hide show more button if there are no more articles to display
  React.useEffect(() => {
    if (displayAmount >= searchResults.length) {
      setIsShown(false);
    }
  }, [displayAmount, searchResults]);

  return (
    <Container>
      <Heading>
        Results for <Term>{keyword}</Term>
      </Heading>
      <CardList>
        {searchResults.slice(0, displayAmount).map((article, index) => {
          return (
            <NewsCard
              key={index}
              article={article}
              loggedIn={loggedIn}
              keyword={keyword}
              switchModals={switchModals}
              savedArticles={savedArticles}
              getSavedArticles={getSavedArticles}
            />
          );
        })}
      </CardList>
      {isShown && <ShowMore onClick={handleShowMore}>Show more</ShowMore>}
    </Container>
  );
}
