// ========== Input
// import all packages
import React, {Fragment} from 'react';
import {TextInput, Text} from 'react-native';
import {IInputProps} from './types';
import style from './style';

export const Input: React.FC<IInputProps> = ({invalid, ...props}) => {
  const styles: Record<string, string | number>[] = [style.input];

  if (typeof invalid === 'string') {
    styles.push(style.inputInvalid);
  }

  if (props.multiline) {
    styles.push(style.textArea);
  }

  return (
    <Fragment>
      <TextInput style={styles} {...props} />
      {invalid && <Text style={style.errorMessage}>{invalid}</Text>}
    </Fragment>
  );
};
