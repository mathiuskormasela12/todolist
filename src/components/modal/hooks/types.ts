// ========= Modal Hooks Types
// import all packages
import {
  Control,
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
} from 'react-hook-form';

export type UseModal = () => {
  errors: FieldErrors<ITodoListForm>;
  control: Control<ITodoListForm, any>;
  handleSubmit: UseFormHandleSubmit<ITodoListForm, any>;
  onSubmit: SubmitHandler<ITodoListForm>;
};

export interface ITodoListForm {
  taskName: string;
  taskDescription: string;
}
