// ========== Style
// import all packages
import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../themes';
import {generateSize} from '../../helpers';

const style = StyleSheet.create({
  hero: {
    flex: 1,
  },
  indicatorStyle: {
    backgroundColor: Colors.white,
  },
  text: {
    color: Colors.white,
    fontFamily: Fonts.bold,
    fontSize: generateSize(5.2, 'width'),
    textAlign: 'center',
  },
  header: {
    backgroundColor: Colors.primary,
    height: generateSize(9, 'height'),
    justifyContent: 'center',
  },
  tabView: {
    backgroundColor: Colors.primary,
  },
  navbar: {
    backgroundColor: 'transparent',
  },
});

export default style;
