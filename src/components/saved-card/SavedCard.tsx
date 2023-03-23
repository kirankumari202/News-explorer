import React from 'react';
import SavedCardTop from '../saved-card-top/SavedCardTop';
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
import { convertDate } from '../../utils/functions';
import { SavedArticle } from '../../types/types';

type Props = {
  article: SavedArticle;
  getSavedArticles: () => void;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  submitSearch: (string: string) => void;
};

export default function SavedCard({
  article,
  getSavedArticles,
  setSearchTerm,
  submitSearch,
}: Props) {
  const { date, image, link, source, text, title }: SavedArticle = article;
  const [publishDate, setPublishDate] = React.useState<string>('');
  const [adjustedTitle, setAdjustedTitle] = React.useState<string>('');
  const [adjustedDescription, setAdjustedDescription] = React.useState<string>('');

  // reformat article data to fit card component
  React.useEffect(() => {
    // reformate date
    const newDate = convertDate(date);
    setPublishDate(newDate);
    // reformat title or replace if undefined
    const titleArray = title ? title.split(' ') : ['Title', 'not', 'available'];
    setAdjustedTitle(
      titleArray.length > 6 ? `${titleArray.slice(0, 12).join(' ')}...` : `${titleArray.join(' ')}`
    );
    // reformat description or replaced if undefined
    const descriptionArray = text ? text.split(' ') : ['Content', 'not', 'available'];
    setAdjustedDescription(
      descriptionArray.length > 30
        ? `${descriptionArray.slice(0, 40).join(' ')}...`
        : `${descriptionArray.join(' ')}`
    );
  }, [date, text, title]);

  return (
    <Card>
      <Image image={image}>
        <SavedCardTop
          article={article}
          getSavedArticles={getSavedArticles}
          setSearchTerm={setSearchTerm}
          submitSearch={submitSearch}
        />
      </Image>
      <CardLink href={link} rel="noreferrer" target="_blank">
        <TextInfo>
          <PublishDate>{publishDate}</PublishDate>
          <Title>{adjustedTitle}</Title>
          <Text>{adjustedDescription}</Text>
          <Source>{source}</Source>
        </TextInfo>
      </CardLink>
    </Card>
  );
}
