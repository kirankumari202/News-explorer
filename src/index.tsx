import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import GlobalStyles from './components/style/GlobalStyles';
import FontStyles from './components/style/FontStyles';
import { BrowserRouter } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles /> 
    <FontStyles />
    <BrowserRouter basename="/news-explorer-frontend/">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


