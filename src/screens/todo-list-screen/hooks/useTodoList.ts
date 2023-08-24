// ========= Todo List Hooks
// import all packages
import {useRef, useState} from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';
import {HandlerFunction, ITodoListForm, UseTodoList} from './types';
import {IModalRef} from '../types';
import {ModalType} from '../../../components/modal/types';

export const useTodoList: UseTodoList = () => {
  const modalRef = useRef<IModalRef>(null);
  const [typeModal, setTypeModal] = useState<ModalType>('Add');

  const {
    control,
    formState: {errors},
  } = useForm<ITodoListForm>({
    defaultValues: {
      taskName: '',
    },
  });

  const handleSubmit: SubmitHandler<ITodoListForm> = data => {
    console.log(data);
  };

  const handleTypeModal = (type: ModalType): void => setTypeModal(type);

  const handleOpenModal: HandlerFunction = () => {
    if (modalRef.current) {
      modalRef.current?.setVisible(!modalRef.current.visible);
    }
  };

  return {
    handleOpenModal,
    modalRef,
    control,
    errors,
    handleSubmit,
    typeModal,
    handleTypeModal,
  };
};
