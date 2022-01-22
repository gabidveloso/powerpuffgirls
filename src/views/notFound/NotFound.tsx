import React from 'react';
import NotFoundStyle from './NotFound.style';
import NotFoundImage from '../../images/not-found.png';
import ButtonStyle from './Button.style';

function NotFound() {
  return (
    <NotFoundStyle>
      <div className="left">
        <div className="text">
          <h1>404</h1>
          <span className="subtitle">Page not found</span>
          <span className="description">
            The page you resquest could not be found.
          </span>
          <span className="description">
            Don&apos;t worry and return to home page.
          </span>
          <div className="btn">
            <ButtonStyle href="/">Home</ButtonStyle>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={NotFoundImage} alt="not-found" />
      </div>
    </NotFoundStyle>
  );
}

export default NotFound;
