// ========== Style
// import all packages
import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../themes';
import {generateSize} from '../../helpers';

const style = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    paddingVertical: generateSize(1.6, 'height'),
    paddingHorizontal: generateSize(4.4, 'width'),
    borderRightColor: Colors.primary,
    borderRightWidth: generateSize(0.7, 'width'),
    borderStyle: 'solid',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: generateSize(0.5, 'width'),
  },
  title: {
    color: Colors.dark,
    fontSize: generateSize(3.5, 'width'),
    fontFamily: Fonts.base,
    marginBottom: generateSize(0.5, 'height'),
  },
  text: {
    fontSize: generateSize(3, 'width'),
    fontFamily: Fonts.base,
    color: Colors.dark,
  },
});

export default style;
