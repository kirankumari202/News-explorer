class NewsApi {
  readonly _baseUrl: string;
  readonly _proxyUrl: string;
  readonly _apiKey: string;
  readonly _maxAge: Date;
  readonly _blacklist: string[]

  constructor() {
    this._baseUrl = 'https://newsapi.org/v2/';
    this._proxyUrl = 'https://nomoreparties.co/news/v2/';
    // this._apiKey = process.env.REACT_APP_API_KEY;
    this._apiKey = 'e96e734cb0194eafae7a5c80c5eab1ca';
    this._maxAge = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    this._blacklist = [
      'sputniknews.com',
      'theamericanconservative.com',
      'freerepublic.com',
      'breitbart.com',
      'independent.co.uk',
      'nationalreview.com',
      'washingtontimes.com',
      'rt.com',
      'westernjournal.com',
      'slashdot.org',
      'thegatewaypundit.com',
      'pjmedia.com',
      'mirror.co.uk',
    ];
  }

  getArticles(query: string): Promise<Object>  {
    return fetch(
      `${this._proxyUrl}everything?qInTitle=${query}&sortBy=publishedAt&from=${
        this._maxAge
      }&excludeDomains=${this._blacklist.join(',')}&language=en&pageSize=100&apiKey=${
        this._apiKey
      }`,
      {
        //   headers: {
        //     'X-Api-Key': this._apiKey,
        //   },
      }
    ).then((response: Response): Object => {
      if (!response.ok) {
        throw new Error(`Search failed! Status: ${response.status}`);
      }
      return response.json();
    });
  }

  getSources(): Promise<Object>  {
    return fetch(`${this._proxyUrl}top-headlines/sources?language=en&apiKey=${this._apiKey}`, {
      //   headers: {
      //     'X-Api-Key': this._apiKey,
      //   },
    }).then((response: Response) => {
      if (!response.ok) {
        throw new Error(`Search failed! Status: ${response.status}`);
      }
      return response.json();
    });
  }
}

export const newsApi = new NewsApi();
