/**
 * Country Interface
 */
export interface ICountry {
  name: string;
  code: string;
  timezone: string;
}

/**
 * Network Interface
 */
export interface INetwork {
  id: number;
  name: string;
  country: ICountry;
}

/**
 * Self Interface to Link
 */
export interface ISelf {
  href: string;
}

/**
 * Link Interface
 */
export interface ILinks {
  self: ISelf;
}

/**
 * Seasons Interface
 */
export interface ISeasons {
  id: string;
  url: string;
  number: number;
  episodeOrder: number;
  premiereDate: string;
  endDate: string;
  network: INetwork;
  webChannel?: any;
  image?: any;
  summary?: any;
  _links: ILinks;
}
