import { IEpisodes } from '../interfaces/Episodes';
import { ISeasons } from '../interfaces/Seasons';
import { IShow } from '../interfaces/Show';
import { fetchEpisodes, fetchSeasons, fetchShow } from './actions';

export function fetchDataShow() {
  return async (dispatch: any) => {
    try {
      const res = await fetch('https://api.tvmaze.com/shows/1955');

      const data: IShow = await res.json();

      dispatch(fetchShow(data));
    } catch (error) {
      dispatch(fetchShow({}));
    }
  };
}
export function fetchDataSeasons() {
  return async (dispatch: any) => {
    try {
      const res = await fetch('https://api.tvmaze.com/shows/1955/seasons');

      const data: ISeasons[] = await res.json();

      dispatch(fetchSeasons(data));
    } catch (error) {
      dispatch(fetchSeasons([]));
    }
  };
}

export function fetchDataEpisodes() {
  return async (dispatch: any) => {
    try {
      const res = await fetch(`https://api.tvmaze.com/shows/1955/episodes`);

      const data: IEpisodes[] = await res.json();

      dispatch(fetchEpisodes(data));
    } catch (error) {
      dispatch(fetchEpisodes([]));
    }
  };
}
