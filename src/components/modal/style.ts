// ========== Style
// import all packages
import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../themes';
import {generateSize} from '../../helpers';

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: Colors.white,
    width: generateSize(78, 'width'),
    height: 'auto',
    paddingHorizontal: generateSize(6.2, 'width'),
    paddingVertical: generateSize(2, 'height'),
    borderRadius: generateSize(1, 'width'),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: generateSize(2, 'height'),
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: generateSize(4.1, 'width'),
    color: Colors.dark,
  },
  close: {
    fontFamily: Fonts.bold,
    color: Colors.danger,
    textTransform: 'capitalize',
  },
  field: {
    marginBottom: generateSize(2, 'height'),
  },
  main: {},
  label: {
    fontFamily: Fonts.base,
    color: Colors.dark,
    fontSize: generateSize(3.4, 'width'),
    marginBottom: generateSize(1, 'height'),
  },
  input: {
    backgroundColor: Colors.light,
    borderRadius: generateSize(1, 'width'),
    paddingLeft: generateSize(3.2, 'width'),
    height: generateSize(6.2, 'height'),
  },
  deleteText: {
    color: Colors.danger,
    fontFamily: Fonts.bold,
    textAlign: 'center',
  },
});

export default style;
