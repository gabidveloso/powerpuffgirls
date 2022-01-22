import { IAction, IGlobalState } from '../interfaces/Store';
import {
  FETCH_DATA_EPISODES,
  FETCH_DATA_SEASONS,
  FETCH_DATA_SHOW,
} from './constants';

const initialState: IGlobalState = {
  show: null,
  seasons: [],
  episodes: [],
};
// eslint-disable-next-line
function reducer(state = initialState, action: IAction) {
  switch (action.type) {
    case FETCH_DATA_SHOW:
      return { ...state, show: action.payload.data };
    case FETCH_DATA_SEASONS:
      return { ...state, seasons: action.payload.data };
    case FETCH_DATA_EPISODES:
      return { ...state, episodes: action.payload.data };
    default:
      return state;
  }
}

export default reducer;
