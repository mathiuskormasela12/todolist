// ========= Todo List Hooks Types
// import all packages
import {RefObject} from 'react';
import {ScreenNames} from '../../../types';
import {IModalRef} from '../types';

export type RootStackParamList = Record<ScreenNames[number], undefined>;

export type HandlerFunction = () => void;

export type UseTodoList = () => {
  handleOpenModal: HandlerFunction;
  modalRef: RefObject<IModalRef>;
};
