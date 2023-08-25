// ========= Todo List Hooks
// import all packages
import {useEffect, useRef, useState} from 'react';
import {HandlerFunction, UseTodoList} from './types';
import {IModalRef} from '../types';
import {ModalType} from '../../../components/modal/types';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../redux/store';
import {
  getTask,
  getTasks,
  setTask,
} from '../../../redux/features/tasks/tasks.slice';

export const useTodoList: UseTodoList = () => {
  const modalRef = useRef<IModalRef>(null);
  const [typeModal, setTypeModal] = useState<ModalType>('Add');
  const dispatch = useDispatch<AppDispatch>();
  const tasks = useSelector((states: RootState) => states.tasksReducer.tasks);

  const handleTypeModal = (type: ModalType): void => setTypeModal(type);

  const handleOpenModal: HandlerFunction = () => {
    if (modalRef.current) {
      modalRef.current?.setVisible(!modalRef.current.visible);
    }
  };

  const handleGetDetail = (id: string) => {
    handleTypeModal('Update');
    dispatch(getTask(id));
    handleOpenModal();
  };

  const handleResetForm: HandlerFunction = () => {
    dispatch(
      setTask({
        id: '',
        taskName: '',
        taskDescription: '',
        time: '',
      }),
    );
  };

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return {
    handleOpenModal,
    modalRef,
    typeModal,
    handleTypeModal,
    tasks,
    handleGetDetail,
    setValue: modalRef.current?.setValue,
    handleResetForm,
  };
};
