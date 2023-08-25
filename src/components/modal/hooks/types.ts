// ========= Modal Hooks Types
// import all packages
import {Dispatch, SetStateAction} from 'react';
import {
  Control,
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormSetValue,
} from 'react-hook-form';
import {IModalProps} from '../types';

export type UseModal = (type: IModalProps['type']) => {
  errors: FieldErrors<ITodoListForm>;
  control: Control<ITodoListForm, any>;
  handleSubmit: UseFormHandleSubmit<ITodoListForm, any>;
  onSubmit: SubmitHandler<ITodoListForm>;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  setValue: UseFormSetValue<ITodoListForm>;
  onDelete: () => void;
  resetForm: () => void;
};

export interface ITodoListForm {
  taskName: string;
  taskDescription: string;
}
