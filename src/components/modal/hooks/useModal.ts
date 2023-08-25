// ========= Use Modal Hooks
// import all packages
import {useState} from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';
import {ITodoListForm, UseModal} from './types';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../redux/store';
import {
  addTask,
  deleteTask,
  setTask,
  updateTask,
} from '../../../redux/features/tasks/tasks.slice';

export const useModal: UseModal = type => {
  const dispatch = useDispatch<AppDispatch>();
  const [visible, setVisible] = useState(false);
  const task = useSelector((states: RootState) => states.tasksReducer.task);

  const {
    control,
    handleSubmit,
    formState: {errors},
    resetField,
    setValue,
  } = useForm<ITodoListForm>({
    values: {
      taskName: task.taskName,
      taskDescription: task.taskDescription,
    },
  });

  const resetForm = (): void => {
    dispatch(
      setTask({
        id: '',
        taskName: '',
        taskDescription: '',
        time: '',
      }),
    );
  };

  const onSubmit: SubmitHandler<ITodoListForm> = data => {
    if (type === 'Add') {
      dispatch(
        addTask({
          taskName: data.taskName,
          taskDescription: data.taskDescription,
          time: new Date().toISOString(),
        }),
      );
    } else if (type === 'Update') {
      dispatch(
        updateTask({
          id: task.id,
          data: {
            taskName: data.taskName,
            taskDescription: data.taskDescription,
          },
        }),
      );
    }
    setVisible(false);
    resetForm();
    resetField('taskName');
    resetField('taskDescription');
  };

  const onDelete = () => {
    dispatch(deleteTask(task.id));
    setVisible(false);
  };

  return {
    control,
    errors,
    handleSubmit,
    onSubmit,
    visible,
    setVisible,
    setValue,
    onDelete,
    resetForm,
  };
};
