import { IButton } from './button';

export interface IMessage {
  id?: string;
  text?: string;
  buttons: IButton[];
}
