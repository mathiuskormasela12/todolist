// =========== Size
// import all modules
import {Dimensions} from 'react-native';
import {DimensionTypes} from './types';

export const generateSize = (size: number, dimension: DimensionTypes) => {
  return (size / 100) * Dimensions.get('screen')[dimension];
};
