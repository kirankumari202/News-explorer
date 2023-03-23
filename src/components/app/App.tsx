import { Switch, Route } from 'react-router-dom';
import Hero from '../hero/Hero';
import Header from '../header/Header';
import About from '../about/About';
import Footer from '../footer/Footer';
import SavedCardList from '../saved-card-list/SavedCardList';
import SearchResult from '../search-result/SearchResult';
import SignIn from '../sign-in/SignIn';
import SignUp from '../sign-up/SignUp';
import React, { useState, useEffect } from 'react';
import SavedHero from '../saved-hero/SavedHero';
import Modal from '../modal/Modal';
import SignedUp from '../signed-up/SignedUp';
import ProtectedRoute from '../protected-route/ProtectedRoute';
import { newsApi } from '../../utils/NewsApi';
import { mainApi } from '../../utils/MainApi';
import { UserContext } from '../../contexts/UserContext';
import { Article, SavedArticle } from '../../types/types';

function App(): JSX.Element {
  // session states
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<{ name: string; email: string } | null>(null);
  // ux states
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isNothing, setIsNothing] = useState<boolean>(false);
  const [searched, setSearched] = useState<boolean>(false);

  // articles states
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [keyword, setKeyword] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Article[] | []>([]);
  const [savedArticles, setSavedArticles] = useState<SavedArticle[] | []>([]);
  const [savedArticlesSorted, setSavedArticlesSorted] = useState<SavedArticle[] | []>([]);
  const [keywordCounter, setKeywordCounter] = useState<{ [keyword: string]: number }>({});
  // modal states
  const [showSignIn, setShowSignIn] = useState<boolean>(false);
  const [showSignUp, setShowSignUp] = useState<boolean>(false);
  const [showSignedUp, setShowSignedUp] = useState<boolean>(false);
  // auth form states
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [authErrorMessage, setAuthErrorMessage] = useState<string | null>(null);

  // TODO REMOVE ME... JUST TESTING TS DEPLOY HERE
  // console.log("If you see me, we're TypeScripting now, baby!");

  // get current user information
  useEffect(() => {
    mainApi
      .getUserInfo()
      .then((response: any): void => {
        setCurrentUser(response.data);
        setLoggedIn(true);
        getSavedArticles();
      })
      .catch((error) => {
        setCurrentUser(null);
        setLoggedIn(false);
        setSavedArticles([]);
        setSearchResults([]);
      });
  }, [loggedIn]);

  // reset auth form states
  useEffect(() => {
    setEmail('');
    setPassword('');
    setUserName('');
    setAuthErrorMessage(null);
  }, [showSignIn, showSignUp, showSignedUp]);

  // When saved articles updates
  useEffect(() => {
    // talley the occurrence of each keyword
    setKeywordCounter(tallySavedKeywords());
    // sort the articles by keyword prevalence
    setSavedArticlesSorted(sortSavedArticles());
  }, [savedArticles]);

  // modal handlers
  function switchModals(role: string): void {
    if (role === 'signup') {
      // close and open signup
      setShowSignIn(false);
      setShowSignUp(true);
      setShowSignedUp(false);
    } else if (role === 'signin') {
      //close and open signin
      setShowSignIn(true);
      setShowSignUp(false);
      setShowSignedUp(false);
    } else if (role === 'signedup') {
      // close and open signedin
      setShowSignIn(false);
      setShowSignUp(false);
      setShowSignedUp(true);
    } else {
      // catch wrong input
      closeModals();
    }
  }

  function closeModals(): void {
    setShowSignIn(false);
    setShowSignUp(false);
    setShowSignedUp(false);
  }

  function handleLogin(e: React.ChangeEvent<HTMLFormElement>): void {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    form.checkValidity() &&
      mainApi
        .login(email, password)
        .then((response) => {
          closeModals();
          setLoggedIn(true);
          setEmail('');
          setUserName('');
          setPassword('');
        })
        .catch((error) => {
          // show error message 'This email is not available' on 409 response
          setAuthErrorMessage(error.message);
          // display for 3 seconds
          setTimeout(() => {
            setAuthErrorMessage(null);
          }, 3000);
        });
  }

  function handleSignUp(e: React.ChangeEvent<HTMLFormElement>): void {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    form.checkValidity() &&
      mainApi
        .register(email, password, userName)
        .then(() => {
          switchModals('signedup');
          setEmail('');
          setUserName('');
          setPassword('');
        })
        .catch((error) => {
          // show error message 'This email is not available' on 409 response
          setAuthErrorMessage(error.message);
          // display for 3 seconds
          setTimeout(() => {
            setAuthErrorMessage(null);
          }, 3000);
          // TODO refactor to display transitioning error message
        });
  }

  function handleLogout(): void {
    localStorage.removeItem('token');
    setLoggedIn(false);
    setCurrentUser(null);
  }

  function submitSearch(string: string): void {
    setSearchResults([]);
    setKeyword(string);
    // update loading ux
    setIsLoading(true);
    setIsNothing(false);
    // search for news
    newsApi
      .getArticles(string)
      .then((articles: any) => {
        setSearched(true);
        setSearchTerm('');
        setIsLoading(false);
        setSearchResults(articles.articles);
        if (articles.articles.length < 1) {
          setIsNothing(true);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setIsNothing(true);
        console.error(error);
      });
  }

  function getSavedArticles(): void {
    mainApi
      .getArticles()
      .then((response: any) => setSavedArticles(response.data))
      .catch((error) => console.error(error));
  }

  type KeywordList = {
    [keyword: string]: number;
  };

  // create an object to tally the number of
  // articles saved per keyword
  function tallySavedKeywords(): KeywordList {
    let keywords: KeywordList = {};
    savedArticles.forEach((item: SavedArticle): void => {
      if (keywords[item.keyword]) {
        keywords[item.keyword]++;
      } else {
        keywords[item.keyword] = 1;
      }
    });
    return keywords;
  }

  // sort saved articles by popularity of keyword
  function sortSavedArticles(): SavedArticle[] {
    const keywordCounter = tallySavedKeywords();
    return savedArticles
      .slice()
      .sort((a: any, b: any) => {
        return keywordCounter[a.keyword] - keywordCounter[b.keyword];
      })
      .reverse();
  }

  return (
    <UserContext.Provider value={currentUser}>
      <Header
        loggedIn={loggedIn}
        // setLoggedIn={setLoggedIn}
        setShowSignIn={setShowSignIn}
        handleLogout={handleLogout}
      />
      <Switch>
        <ProtectedRoute path="/saved-news" loggedIn={loggedIn}>
          <SavedHero savedArticles={savedArticles} keywordCounter={keywordCounter} />
          <SavedCardList
            savedArticlesSorted={savedArticlesSorted}
            getSavedArticles={getSavedArticles}
            setSearchTerm={setSearchTerm}
            submitSearch={submitSearch}
          />
        </ProtectedRoute>
        <Route path="/">
          <Hero
            submitSearch={submitSearch}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            searched={searched}
          />
          <SearchResult
            isLoading={isLoading}
            searchResults={searchResults}
            isNothing={isNothing}
            loggedIn={loggedIn}
            keyword={keyword}
            switchModals={switchModals}
            savedArticles={savedArticlesSorted}
            getSavedArticles={getSavedArticles}
            searched={searched}
          />
          <About />
        </Route>
      </Switch>
      <Footer />
      <Modal show={showSignUp || showSignIn || showSignedUp} closeModals={closeModals}>
        <SignedUp show={showSignedUp} switchModals={switchModals} />
        <SignUp
          show={showSignUp}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          userName={userName}
          setUserName={setUserName}
          switchModals={switchModals}
          handleSignUp={handleSignUp}
          authErrorMessage={authErrorMessage}
        />
        <SignIn
          show={showSignIn}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          switchModals={switchModals}
          handleLogin={handleLogin}
          authErrorMessage={authErrorMessage}
        />
      </Modal>
    </UserContext.Provider>
  );
}

export default App;
