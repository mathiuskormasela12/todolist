// ========= Todo List Hooks
// import all packages
import {useRef} from 'react';
import {HandlerFunction, UseTodoList} from './types';
import {IModalRef} from '../types';

export const useTodoList: UseTodoList = () => {
  const modalRef = useRef<IModalRef>(null);

  const handleOpenModal: HandlerFunction = () => {
    if (modalRef.current) {
      modalRef.current?.setVisible(!modalRef.current.visible);
    }
  };

  return {
    handleOpenModal,
    modalRef,
  };
};
