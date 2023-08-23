// ========== Button Style
// import all packages
import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../themes';
import {generateSize} from '../../helpers';

const style = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    width: generateSize(28, 'width'),
    height: generateSize(7, 'height'),
    borderRadius: generateSize(1.2, 'width'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: Fonts.base,
    fontSize: generateSize(4.2, 'width'),
    fontWeight: 'bold',
    color: Colors.white,
  },
});

export default style;
