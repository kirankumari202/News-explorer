import React from 'react';
import MainCardTop from '../main-card-top/MainCardTop';
import {
  Card,
  CardLink,
  Image,
  TextInfo,
  PublishDate,
  Title,
  Text,
  Source,
} from '../shared/styledCard';
import notFound from '../../images/placeholder-logo.png';
import { convertDate } from '../../utils/functions';
import { Article, SavedArticle } from '../../types/types';

type Props = {
  article: Article;
  loggedIn: boolean;
  keyword: string;
  switchModals: (role: string) => void;
  savedArticles: SavedArticle[];
  getSavedArticles: () => void;
};

export default function NewsCard({
  article,
  loggedIn,
  keyword,
  switchModals,
  savedArticles,
  getSavedArticles,
}: Props): JSX.Element {
  const { title, description, publishedAt, source, url, urlToImage }: Article = article;
  const [date, setDate] = React.useState<string>('');
  const [adjustedTitle, setAdjustedTitle] = React.useState<string>('');
  const [adjustedDescription, setAdjustedDescription] = React.useState<string>('');

  // reformat article data to fit within card component
  React.useEffect(() => {
    // reformat date
    const newDate = convertDate(publishedAt);
    setDate(newDate);
    // reformat title or replace if undefined
    const titleArray = title ? title.split(' ') : ['Title', 'not', 'available'];
    setAdjustedTitle(
      titleArray.length > 6 ? `${titleArray.slice(0, 12).join(' ')}...` : `${titleArray.join(' ')}`
    );
    // truncate long descriptions or replace if undefined
    const descriptionArray = description ? description.split(' ') : ['Content', 'not', 'available'];
    setAdjustedDescription(
      descriptionArray.length > 30
        ? `${descriptionArray.slice(0, 40).join(' ')}...`
        : `${descriptionArray.join(' ')}`
    );
  }, []);

  return (
    <Card>
      <Image image={urlToImage || notFound}>
        <MainCardTop
          loggedIn={loggedIn}
          keyword={keyword}
          article={article}
          switchModals={switchModals}
          savedArticles={savedArticles}
          getSavedArticles={getSavedArticles}
        />
      </Image>
      <CardLink href={url} rel="noreferrer" target="_blank">
        <TextInfo>
          <PublishDate>{date}</PublishDate>
          <Title>{adjustedTitle}</Title>
          <Text>{adjustedDescription}</Text>
          <Source>{source.name}</Source>
        </TextInfo>
      </CardLink>
    </Card>
  );
}
