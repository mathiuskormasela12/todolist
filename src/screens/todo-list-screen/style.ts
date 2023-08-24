// ========== Todo List Screen Style
// import all packages
import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../themes';
import {generateSize} from '../../helpers';

const style = StyleSheet.create({
  hero: {
    backgroundColor: Colors.light,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: generateSize(2.5, 'height'),
  },
  addTask: {
    fontFamily: Fonts.bold,
    color: Colors.primary,
  },
  row: {
    marginTop: generateSize(1.8, 'height'),
  },
  col: {
    marginBottom: generateSize(1.3, 'height'),
  },
  title: {
    fontSize: generateSize(2.5, 'height'),
    fontFamily: Fonts.bold,
    color: Colors.dark,
  },
});

export default style;
