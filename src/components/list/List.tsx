import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { IGlobalState } from '../../interfaces/Store';
import { fetchDataEpisodes, fetchDataSeasons } from '../../store/fetchData';
import ListStyle from './List.style';

function List() {
  const globalState = useSelector((state) => state) as IGlobalState;
  const dispatch = useDispatch();

  const { season, episode } = useParams();

  const [seasonAtive, setSeasonAtive] = useState(season || '1');

  useEffect(() => {
    dispatch(fetchDataSeasons());
    dispatch(fetchDataEpisodes());
  }, []);

  if (!globalState.seasons || !globalState.episodes) return null;

  return (
    <ListStyle>
      {globalState.seasons.map((item) => (
        <button
          type="button"
          onClick={() => setSeasonAtive(item.number.toString())}
          key={`season-${item.number}`}
          className={seasonAtive === item.number.toString() ? 'active' : ''}
        >{`S${item.number}`}</button>
      ))}

      {globalState.episodes.map((ep) => {
        if (
          ep.season.toString() === seasonAtive &&
          ep.id.toString() !== episode
        )
          return (
            <Link
              key={`ep-${ep.id}-${ep.season}`}
              to={`/${ep.season}/${ep.id}`}
            >
              {ep.name}
            </Link>
          );
        return null;
      })}
    </ListStyle>
  );
}

export default List;
