// Import Packages
import React from 'react';

// Import Interface
import { ICard } from '../../../interfaces/Card';

// Import Component
import CardStyle from './Card.style';

function Card(props: ICard) {
  const { id, season, name, backgroundImage, epNumber, exhibitionDate } = props;

  return (
    <CardStyle to={`/${season}/${id}`}>
      <div className="top">
        <img src={backgroundImage.medium} alt="episode preview" />
      </div>
      <div className="bottom">
        <div className="line">
          <span className="number">{epNumber}.</span>
          <span className="name">{name}</span>
        </div>
        <div className="line">
          <span className="date">{exhibitionDate}</span>
        </div>
      </div>
    </CardStyle>
  );
}

export default Card;
