// Import Packages
import React from 'react';

// Import Styled Components
import NotFoundStyle from './NotFound.style';
import ButtonStyle from './Button.style';

// Import Image
import NotFoundImage from '../../images/not-found.png';

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
