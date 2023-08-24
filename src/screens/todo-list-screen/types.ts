// ========= IModalRef
// import all packages
import {Dispatch, SetStateAction} from 'react';

export interface IModalRef {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}
