// Import Packages
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

// Import Interface
import { IGlobalState } from '../../interfaces/Store';

// Import Components
import DetailInfo from '../../components/detailInfo/DetailInfo';
import ButtonHomeStyle from './ButtonHomeStyle';

// Import local Image
import { ReactComponent as ReactHome } from '../../images/home.svg';

function Detail() {
  window.scrollTo({
    top: 0,
  });
  const globalState = useSelector((state) => state) as IGlobalState;

  const { episode } = useParams();

  const navigate = useNavigate();

  if (globalState && globalState.episodes.length === 0) return null;

  // Check if episode exists
  const selectedEp = globalState.episodes?.filter(
    (ep) => ep.id.toString() === episode
  )[0];

  if (!selectedEp) {
    navigate('/404');
    return null;
  }

  if (!selectedEp || Object.keys(selectedEp).length === 0) return null;

  const { name, number, rating, airdate, image, summary } = selectedEp;

  return (
    <>
      <ButtonHomeStyle onClick={() => navigate('/')}>
        <ReactHome />
        <span className="hover">Back Home</span>
      </ButtonHomeStyle>
      <DetailInfo
        name={name}
        backgroundImage={image}
        rating={rating && rating.average ? rating.average.toString() : ''}
        exhibitionDate={airdate}
        season={selectedEp.season}
        epNumber={number}
        summary={summary}
      />
    </>
  );
}

export default Detail;
