// ========= Todo List Hooks Types
// import all packages
import {RefObject} from 'react';
import {ScreenNames} from '../../../types';
import {IModalRef} from '../types';
import {ModalType} from '../../../components/modal/types';
import {ITask} from '../../../redux/features/tasks/types';
import {UseFormSetValue} from 'react-hook-form';

export type RootStackParamList = Record<ScreenNames[number], undefined>;

export type HandlerFunction = () => void;

export type UseTodoList = () => {
  handleOpenModal: HandlerFunction;
  modalRef: RefObject<IModalRef>;
  typeModal: ModalType;
  handleTypeModal: (modal: ModalType) => void;
  tasks: ITask[];
  handleGetDetail: (id: string) => void;
  setValue: UseFormSetValue<ITodoListForm> | undefined;
  handleResetForm: HandlerFunction;
};

export interface ITodoListForm {
  taskName: string;
  taskDescription: string;
}
