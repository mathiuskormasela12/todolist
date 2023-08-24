// ========= Todo List Hooks Types
// import all packages
import {RefObject} from 'react';
import {ScreenNames} from '../../../types';
import {IModalRef} from '../types';
import {Control, FieldErrors, SubmitHandler} from 'react-hook-form';
import {ModalType} from '../../../components/modal/types';

export type RootStackParamList = Record<ScreenNames[number], undefined>;

export type HandlerFunction = () => void;

export type UseTodoList = () => {
  handleOpenModal: HandlerFunction;
  modalRef: RefObject<IModalRef>;
  errors: FieldErrors<ITodoListForm>;
  control: Control<ITodoListForm, any>;
  handleSubmit: SubmitHandler<ITodoListForm>;
  typeModal: ModalType;
  handleTypeModal: (modal: ModalType) => void;
};

export interface ITodoListForm {
  taskName: string;
}
