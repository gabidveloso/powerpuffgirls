import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IShow } from '../../interfaces/Show';
import { IGlobalState } from '../../interfaces/Store';
import DetailInfo from '../../components/detailInfo/DetailInfo';
import { fetchDataShow } from '../../store/fetchData';

function Home() {
  const globalState = useSelector((state) => state) as IGlobalState;
  const dispatch = useDispatch();

  /**
   * Component Did Mount
   */
  useEffect(() => {
    dispatch(fetchDataShow());
  }, []);

  /**
   * Return if show doesn't have values
   */
  if (
    Object.keys(globalState).length === 0 ||
    Object.keys(globalState.show as IShow).length === 0
  )
    return null;

  /**
   * Distruct show
   */
  const { name, image, rating, genres, premiered, ended, summary } =
    globalState.show as IShow;

  // Get Start an End Year
  const startYear = premiered ? premiered.split('-')[0] : '';
  const endYear = ended ? ended.split('-')[0] : '';

  return (
    <DetailInfo
      name={name}
      backgroundImage={image}
      rating={rating && rating.average ? rating.average.toString() : ''}
      startYear={startYear}
      endYear={endYear}
      season={globalState.seasons.length}
      genres={genres}
      summary={summary}
    />
  );
}

export default Home;
