// ========== Input Types
// import all packages
import {NativeSyntheticEvent, TextInputFocusEventData} from 'react-native';

export interface IInputProps {
  invalid?: string;
  placeholder?: string;
  onChangeText: (valye: string) => void;
  onBlur?: (value: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  value: string;
  multiline?: boolean;
  numberOfLines?: number;
}
