import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IGlobalState } from '../../interfaces/Store';

function Detail() {
  const globalState = useSelector((state) => state) as IGlobalState;

  const { season, episode } = useParams();

  console.log(globalState);

  console.log(episode);
  console.log(season);
  const selectedEp = globalState.episodes?.filter(
    (ep) => ep.id.toString() === episode
  )[0];

  if (!selectedEp) return null;
  console.log(selectedEp);

  return <div>{selectedEp.name}</div>;
}

export default Detail;
