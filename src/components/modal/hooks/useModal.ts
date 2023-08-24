// ========= Use Modal Hooks
// import all packages
import {useForm, SubmitHandler} from 'react-hook-form';
import {ITodoListForm, UseModal} from './types';

export const useModal: UseModal = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<ITodoListForm>({
    defaultValues: {
      taskName: '',
      taskDescription: '',
    },
  });

  const onSubmit: SubmitHandler<ITodoListForm> = data => {
    console.log(data);
  };

  return {
    control,
    errors,
    handleSubmit,
    onSubmit,
  };
};
