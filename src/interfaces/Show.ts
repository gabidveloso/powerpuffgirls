/**
 * import Interfaces alredy declared in Seasons
 */
import { ISelf, INetwork } from './Seasons';

/**
 * Schedule Interface
 */
export interface ISchedule {
  time: string;
  days: string[];
}

/**
 * Rating Interace
 */
export interface IRating {
  average: number;
}

/**
 * External Interface
 */
export interface IExternals {
  tvrage: number;
  thetvdb: number;
  imdb: string;
}

/**
 * Image Interface
 */
export interface IImage {
  medium: string;
  original: string;
}

/**
 * Previsiou Episode
 */
export interface IPreviousepisode {
  href: string;
}

/**
 * Links Interface
 */
export interface ILinksShow {
  self: ISelf;
  previousepisode: IPreviousepisode;
}

/**
 * Main Show interface
 */
export interface IShow {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite?: any;
  schedule: ISchedule;
  rating: IRating;
  weight: number;
  network: INetwork;
  webChannel?: any;
  dvdCountry?: any;
  externals: IExternals;
  image: IImage;
  summary: string;
  updated: number;
  _links: ILinksShow;
}
