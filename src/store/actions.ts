import {
  FETCH_DATA_SHOW,
  FETCH_DATA_SEASONS,
  FETCH_DATA_EPISODES,
} from './constants';

import { IShow } from '../interfaces/Show';
import { ISeasons } from '../interfaces/Seasons';
import { IEpisodes } from '../interfaces/Episodes';

export function fetchShow(data: IShow | null) {
  return {
    type: FETCH_DATA_SHOW,
    payload: {
      data,
    },
  };
}

export function fetchSeasons(data: ISeasons[]) {
  return {
    type: FETCH_DATA_SEASONS,
    payload: {
      data,
    },
  };
}

export function fetchEpisodes(data: IEpisodes[]) {
  return {
    type: FETCH_DATA_EPISODES,
    payload: {
      data,
    },
  };
}
