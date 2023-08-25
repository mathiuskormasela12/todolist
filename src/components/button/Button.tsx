// ========== Button
// import all packages
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {IButton} from './types';
import style from './style';

export const Button: React.FC<IButton> = ({
  children,
  onPress,
  variant,
  disabled = false,
}) => {
  const styles: Record<string, string | number>[] = [style.btn];

  switch (variant) {
    case 'primary':
      styles.push(style.btnPrimary);
      break;

    default:
      styles.push(style.btnDanger);
  }

  if (disabled) {
    styles.push(style.btnDisabled);
  }

  return (
    <TouchableOpacity disabled={disabled} style={styles} onPress={onPress}>
      <Text style={style.text}>{children}</Text>
    </TouchableOpacity>
  );
};
