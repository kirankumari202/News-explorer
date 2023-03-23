export type Article = {
  title: string;
  description: string;
  publishedAt: string;
  source: { name: string };
  url: string;
  urlToImage: string;
};
export type SavedArticle = {
  keyword: string;
  title: string;
  text: string;
  date: string;
  source: string;
  link: string;
  image: string;
  _id: string;
};
