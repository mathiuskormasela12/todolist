// ========== Container
// import all packages
import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';
import style from './style';

export const Container: React.FC<PropsWithChildren> = ({children}) => {
  return <View style={style.container}>{children}</View>;
};
