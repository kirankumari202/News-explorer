import React, { useState } from 'react';
import { useHistory } from 'react-router';
import trash from '../../images/trash.svg';
import { SavedArticle } from '../../types/types';
import { mainApi } from '../../utils/MainApi';
import {
  Container,
  Keyword,
  DeleteContainer,
  DeleteTooltip,
  DeleteButton,
  DeleteIcon,
} from './styledSavedCardTop';

type Props = {
  article: SavedArticle;
  getSavedArticles: () => void;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  submitSearch: (string: string) => void;
};

export default function SavedCardTop({
  article,
  getSavedArticles,
  setSearchTerm,
  submitSearch,
}: Props): JSX.Element {
  const [isShown, setIsShown] = useState<boolean>(false);
  const history = useHistory();

  function handleDeleteClick(): void {
    mainApi
      .removeArticle(article._id)
      .then((response) => {
        getSavedArticles();
      })
      .catch((error) => console.error(error));
  }

  function handleKeywordClick(): void {
    history.push('/');
    setSearchTerm(article.keyword);
    submitSearch(article.keyword);
  }

  return (
    <Container>
      <Keyword shown={isShown} type="button" onClick={handleKeywordClick}>
        {article.keyword.split(' ').length > 2
          ? `${article.keyword.split(' ').slice(0, 2).join(' ')}...`
          : `${article.keyword}`}
      </Keyword>
      <DeleteContainer onMouseLeave={() => setIsShown(false)} onClick={handleDeleteClick}>
        <DeleteTooltip shown={isShown} type="button">
          Remove from saved
        </DeleteTooltip>
        <DeleteButton type="button" onMouseEnter={() => setIsShown(true)}>
          <DeleteIcon src={trash} alt="delete"></DeleteIcon>
        </DeleteButton>
      </DeleteContainer>
    </Container>
  );
}
