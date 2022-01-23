import { IImage } from './Show';

/**
 * Deatil Info Pros Interface
 */
export interface IDetailInfo {
  name: string;
  backgroundImage: IImage;
  rating?: string;
  startYear?: string;
  endYear?: string;
  genres?: string[];
  exhibitionDate?: string;
  epNumber?: number;
  season?: number;
}
