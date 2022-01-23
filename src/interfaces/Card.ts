import { IImage } from './Show';
/**
 * Card Props Interface
 */
export interface ICard {
  id: number;
  season: number;
  backgroundImage: IImage;
  epNumber: number;
  name: string;
  exhibitionDate: string;
}
