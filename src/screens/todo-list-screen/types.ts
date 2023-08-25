// ========= IModalRef
// import all packages
import {Dispatch, SetStateAction} from 'react';
import {UseFormSetValue} from 'react-hook-form';
import {ITodoListForm} from '../../components/modal/hooks/types';

export interface IModalRef {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  setValue: UseFormSetValue<ITodoListForm>;
}
