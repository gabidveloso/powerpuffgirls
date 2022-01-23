// Import Packages
import React from 'react';

// Import Redux packges
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';
import reducer from './store/reducers';

// Import Global List Component
import List from './components/list/List';

function App() {
  /**
   * Create Store to be accessulf in all app
   */
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
