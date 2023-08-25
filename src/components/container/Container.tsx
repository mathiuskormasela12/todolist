// ========== Container
// import all packages
import React from 'react';
import {View} from 'react-native';
import style from './style';
import {IContainerProps} from './types';

export const Container: React.FC<IContainerProps> = ({children, flex}) => {
  const styles: Record<string, string | number>[] = [style.container];

  if (typeof flex === 'number') {
    styles.push({flex});
  }

  return <View style={styles}>{children}</View>;
};
