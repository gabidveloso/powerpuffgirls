import React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import GlobalStyles from './GlobalStyles.style';
import Router from './Router';

ReactDOM.render(
  <React.StrictMode>
    <Normalize />
    <GlobalStyles />
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
