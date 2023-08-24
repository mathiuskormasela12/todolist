// ========== Button
// import all packages
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {IButton} from './types';
import style from './style';

export const Button: React.FC<IButton> = ({children, onPress, variant}) => {
  return (
    <TouchableOpacity
      style={[
        style.btn,
        variant === 'primary' ? style.btnPrimary : style.btnDanger,
      ]}
      onPress={onPress}>
      <Text style={style.text}>{children}</Text>
    </TouchableOpacity>
  );
};
