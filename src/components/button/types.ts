// ========= IButton
// import all packages
import {PropsWithChildren} from 'react';

export interface IButton extends PropsWithChildren {
  onPress: () => void;
}
