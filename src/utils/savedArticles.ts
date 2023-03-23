import dog from '../images/art-dog.png';
import moose from '../images/art-moose.png';
import stars from '../images/art-stars.png';
import water from '../images/art-water.png';
import yellow from '../images/art-yellow.png';

type Article = {keyword: string, title: string, text: string, shortText: string, date: string, source: string, link: string, image: string}[]

export const articles: Article  = [
  {
    keyword: 'Nature',
    title: "Everyone Needs a Special 'Sit Spot' in Nature",
    text: 'Ever since I read Richard Louv\'s influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...',
    shortText:
      'Ever since I read Richard Louv\'s influential book, "Last Child in the Woods," the idea of having a special...',
    date: 'November 4, 2020',
    source: 'Treehugger',
    link: 'https://www.example.com',
    image: dog,
  },
  {
    keyword: 'Nature',
    title: 'Nature makes you better',
    text: 'We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.',
    shortText:
      'We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents...',
    date: 'February 19, 2019',
    source: 'national geographic',
    link: 'https://www.example.com',
    image: water,
  },
  {
    keyword: 'Yellowstone',
    title: 'Nostalgic Photos of Tourists in U.S. National Parks',
    text: 'Uri Løvevild Golman and Helle Løvevild Golman are National Geographic Explorers and conservation photographers who just completed a project and book they call their love letter to...',
    shortText:
      'Uri Løvevild Golman and Helle Løvevild Golman are National Geographic Explorers and conservation photographers...',
    date: 'October 19, 2020',
    source: 'national geographic',
    link: 'https://www.example.com',
    image: yellow,
  },
  {
    keyword: 'Parks',
    title: 'Grand Teton Renews Historic Crest Trail',
    text: '“The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be...',
    shortText:
      '“The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933...',
    date: 'November 4, 2020',
    source: 'national parks traveler',
    link: 'https://www.example.com',
    image: moose,
  },
  {
    keyword: 'Photography',
    title: "Scientists Don't Know Why Polaris Is So Weird ",
    text: 'Humans have long relied on the starry sky to push into new frontiers, sail to the very edge of the world and find their way back home again. Even animals look to the stars to guide them. ',
    shortText:
      'Humans have long relied on the starry sky to push into new frontiers, sail to the very edge of the world and...',
    date: 'March 16, 2020',
    source: 'treehugger',
    link: 'https://www.example.com',
    image: stars,
  },
];

// Arrays below were used to get placeholder images for articles missing image urls

// export const defaultImages = [
//   'https://github.com/McCambley/news-explorer-frontend/blob/main/src/images/art-dog.png',
//   'https://github.com/McCambley/news-explorer-frontend/blob/main/src/images/art-moose.png',
//   'https://github.com/McCambley/news-explorer-frontend/blob/main/src/images/art-stars.png',
//   'https://github.com/McCambley/news-explorer-frontend/blob/main/src/images/art-water.png',
//   'https://github.com/McCambley/news-explorer-frontend/blob/main/src/images/art-yellow.png',
// ];

// export const blueImages = [
//   'https://images.unsplash.com/photo-1523633589114-88eaf4b4f1a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
//   'https://images.unsplash.com/photo-1486520299386-6d106b22014b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80',
//   'https://images.unsplash.com/photo-1483401757487-2ced3fa77952?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=873&q=80',
//   'https://images.unsplash.com/photo-1462556791646-c201b8241a94',
//   'https://images.unsplash.com/photo-1594722553561-a3def9a3c3df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJsdWUlMjBuZXdzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//   'https://images.unsplash.com/photo-1589645733841-b54da1b6ef06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1548&q=80',
//   'https://images.unsplash.com/photo-1552072232-059f1a5d76c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1760&q=80',
//   'https://images.unsplash.com/photo-1530569673472-307dc017a82d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1588&q=80',
// ];

// export const newsImages = [
//   'https://images.unsplash.com/photo-1528297506728-9533d2ac3fa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
//   'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
//   'https://images.unsplash.com/photo-1608474498735-cabbe7461503?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
//   'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
//   'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
//   'https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
//   'https://images.unsplash.com/photo-1421757381940-5d269570b21c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=874&q=80',
//   'https://images.unsplash.com/photo-1502892247800-37f114ca1e24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
//   'https://images.unsplash.com/photo-1584695369221-3d8a8ebfeef0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80',
//   'https://images.unsplash.com/photo-1513611771808-7e8ab7f1dec6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
// ];
