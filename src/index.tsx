// Import Packages
import React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import Router from './Router';

// Import Styles
import GlobalStyles from './GlobalStyles.style';

ReactDOM.render(
  <React.StrictMode>
    <Normalize />
    <GlobalStyles />
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
