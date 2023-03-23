class MainApi {
  readonly _baseUrl: string;

  constructor() {
    // this._baseUrl =
    //   process.env.NODE_ENV === 'development'
    //     ? 'http://localhost:5000'
    //     : 'https://api.mccambley-news.students.nomoreparties.site';
    this._baseUrl = 'https://api.mccambley-news.students.nomoreparties.sbs';
  }

  _checkResponse(res: Response): Object {
    if (!res.ok) {
      return Promise.reject(`${res.status} error!`);
    }
    return res.json();
  }

  // ARTICLE METHODS
  // GET /articles getArticles
  getArticles(): Promise<Object> {
    return fetch(`${this._baseUrl}/articles`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then((res) => this._checkResponse(res));
  }
  // POST /articles saveArticle
  saveArticle(keyword: string, title: string, text: string, date: string, source: string, link: string, image: string) {
    return fetch(`${this._baseUrl}/articles`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ keyword, title, text, date, source, link, image }),
    }).then((res: Response): Object => this._checkResponse(res));
  }

  // DELETE /articles/:articleId removeArticle
  removeArticle(articleId: string): Promise<Object> {
    return fetch(`${this._baseUrl}/articles/${articleId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    }).then((res: Response): Object => this._checkResponse(res));
  }

  // USER METHODS
  // GET /users/me // getUserInfo
  getUserInfo(): Promise<Object> {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then((res: Response): Object => this._checkResponse(res));
  }

  // AUTHORIZATION METHODS
  // POST /signup signup
  register(email: string, password: string, name: string): Promise<Object> {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    }).then((response: Response) => {
      if (response.status === 201) {
        return response.json();
      }
      if (response.status === 400) {
        throw new Error('One of the fields was filled in incorrectly');
      }
      if (response.status === 409) {
        throw new Error('This email is not available');
      }
    });
  }

  // POST /signin login
  login(email: string, password: string): Promise<Object> {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response: Response) => {
        if (response.status === 200) {
          return response.json();
        }
        if (response.status === 400) {
          throw new Error('One or more of the fields were not provided');
        }
        if (response.status === 401) {
          // throw new Error('The user with the specified email not found ');
          throw new Error('Incorrect email or password');
        }
      })
      .then((res: {token: string}) => {
        localStorage.setItem('token', res.token);
        return res;
      });
  }
}

export const mainApi = new MainApi();
