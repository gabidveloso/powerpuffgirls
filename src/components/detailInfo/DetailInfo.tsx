import React from 'react';
import { IDetailInfo } from '../../interfaces/DeatailInfo';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useParams } from 'react-router-dom';
// import { IGlobalState } from '../../interfaces/Store';
// import { fetchDataEpisodes, fetchDataSeasons } from '../../store/fetchData';
import DetailInfoStyle from './DetailInfo.style';
import RatingStyle from './Rating.style';
import TitleStyle from './Title.style';
import { ReactComponent as ReactStar } from '../../images/star.svg';
import SubInfoStyle from './SubInfoStyle';

function DetailInfo(props: IDetailInfo) {
  //   const {
  //     name,
  //     backgroundImage,
  //     rating,
  //     startYear,
  //     endYear,
  //     genres,
  //     exhibitionDate,
  //     epNumber,
  //     season,
  //   } = props;
  const {
    name,
    backgroundImage,
    rating,
    startYear,
    endYear,
    epNumber,
    exhibitionDate,
    season,
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

            <div className="separtor" />

            <SubInfoStyle>
              {epNumber ? `Season ${season}` : `${season} Seasons`}
            </SubInfoStyle>
          </div>
        </div>
        <span>{startYear}</span>
        <span>{endYear}</span>
      </div>
    </DetailInfoStyle>
  );
}

export default DetailInfo;
