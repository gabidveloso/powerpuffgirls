import { IEpisodes } from './Episodes';
import { ISeasons } from './Seasons';
import { IShow } from './Show';

/**
 * Action Interface
 */
export interface IAction {
  type: string;
  payload: any;
}

/**
 * Action Initial State
 */
export interface IGlobalState {
  show: IShow | null;
  seasons: ISeasons[];
  episodes: IEpisodes[];
}
