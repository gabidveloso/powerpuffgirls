/**
 * import Interfaces alredy declared in Show and Seasons
 */
import { IRating, IImage } from './Show';
import { ILinks } from './Seasons';

/**
 * Episodes interface
 */
export interface IEpisodes {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: Date;
  runtime: number;
  rating: IRating;
  image: IImage;
  summary: string;
  _links: ILinks;
}
