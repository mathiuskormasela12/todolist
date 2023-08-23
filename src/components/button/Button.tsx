// ========== Button
// import all packages
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {IButton} from './types';
import style from './style';

export const Button: React.FC<IButton> = ({children, onPress}) => {
  return (
    <TouchableOpacity style={style.btn} onPress={onPress}>
      <Text style={style.text}>{children}</Text>
    </TouchableOpacity>
  );
};
