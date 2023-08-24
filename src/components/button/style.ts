// ========== Button Style
// import all packages
import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../themes';
import {generateSize} from '../../helpers';

const style = StyleSheet.create({
  btn: {
    width: '100%',
    borderRadius: generateSize(1.2, 'width'),
    justifyContent: 'center',
    alignItems: 'center',
    height: generateSize(6.2, 'height'),
  },
  btnPrimary: {
    backgroundColor: Colors.primary,
  },
  btnDanger: {
    backgroundColor: Colors.danger,
  },
  text: {
    fontFamily: Fonts.base,
    fontSize: generateSize(4.2, 'width'),
    fontWeight: 'bold',
    color: Colors.white,
  },
});

export default style;
