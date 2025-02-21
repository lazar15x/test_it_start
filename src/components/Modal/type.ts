import { ReactNode } from 'react';
import { ActionType } from '../CardSeminar/type';
import { ISeminarsResponse } from '../../types/Seminar';

export interface IModalProps {
  children?: ReactNode;
  actionType?: any;
}

export interface IDeleteContent {
  onConfirmDelete: () => void;
  setActionType: React.Dispatch<React.SetStateAction<ActionType>>;
}

export interface IEditContent extends ISeminarsResponse {
  onConfirmEdit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  setActionType: React.Dispatch<React.SetStateAction<ActionType>>;
}
