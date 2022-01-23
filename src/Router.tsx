// Import Packages
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Views
import App from './App';
import Detail from './views/detail/Detail';
import Home from './views/home/Home';
import NotFound from './views/notFound/NotFound';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path=":season/:episode" element={<Detail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
