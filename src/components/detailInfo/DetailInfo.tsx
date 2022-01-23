// Import Packages
import React from 'react';

// Import Interface
import { IDetailInfo } from '../../interfaces/DeatailInfo';

// Import Styled Components
import DetailInfoStyle from './DetailInfo.style';
import RatingStyle from './Rating.style';
import TitleStyle from './Title.style';
import SeparatorBallStyle from '../SeparatorBall/SeparatorBallStyle';
import InfoDescriptionStyle from './InfoDescriptionStyle';
import SubInfoStyle from '../SubInfoStyle/SubInfoStyle';

// Import local Image
import { ReactComponent as ReactStar } from '../../images/star.svg';

function DetailInfo(props: IDetailInfo) {
  const {
    name,
    backgroundImage,
    rating,
    startYear,
    endYear,
    epNumber,
    exhibitionDate,
    season,
    genres,
    summary,
  } = props;

  return (
    <DetailInfoStyle>
      <div className={`background-img ${epNumber ? 'ep' : ''}`}>
        <img
          src={backgroundImage.medium}
          alt=""
          srcSet={`${backgroundImage.original} 1200w`}
        />
        <div className="overlay" />
      </div>

      <div className="info">
        <div className="info-header">
          <TitleStyle>{name}</TitleStyle>
          <div className="line">
            {rating !== '' && (
              <RatingStyle>
                <ReactStar />
                <div className="rating-value">
                  <span className="actual">{rating}</span>
                  <span className="max">/10</span>
                </div>
              </RatingStyle>
            )}

            <div className="date-season">
              <SubInfoStyle>
                {exhibitionDate || `${startYear} - ${endYear}`}
              </SubInfoStyle>

              <SeparatorBallStyle />

              <SubInfoStyle>
                {epNumber ? `Season ${season}` : `${season} Seasons`}
              </SubInfoStyle>
            </div>
          </div>

          {genres?.length !== 0 && (
            <div className="line genres">
              {genres?.map((item) => (
                <SubInfoStyle key={item}>{item}</SubInfoStyle>
              ))}
            </div>
          )}
        </div>

        <InfoDescriptionStyle dangerouslySetInnerHTML={{ __html: summary }} />
      </div>
    </DetailInfoStyle>
  );
}

export default DetailInfo;
