import { ISeminarsResponse } from '../../types/Seminar';

export interface ICardSeminar extends ISeminarsResponse {
  setData: React.Dispatch<React.SetStateAction<ISeminarsResponse[]>>;
}

export type ActionType = 'edit' | 'delete' | null;
