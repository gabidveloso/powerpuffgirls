import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';
import reducer from './store/reducers';

import List from './components/list/List';

function App() {
  const store = createStore(reducer, applyMiddleware(thunkMiddleware));

  return (
    <Provider store={store}>
      <div className="App">
        <Outlet />
        <List />
      </div>
    </Provider>
  );
}

export default App;
