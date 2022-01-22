import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import thunkMiddleware from 'redux-thunk';
import GlobalStyles from './GlobalStyles.style';
import NotFound from './views/notFound/NotFound';
import reducer from './store/reducers';
import Home from './views/home/Home';
import List from './components/list/List';
import Detail from './views/detail/Detail';

function App() {
  const store = createStore(reducer, applyMiddleware(thunkMiddleware));

  return (
    <Provider store={store}>
      <div className="App">
        <Normalize />
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:season/:episode" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <List />
      </div>
    </Provider>
  );
}

export default App;
