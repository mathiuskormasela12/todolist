// =========== Input Style
// import all packages
import {StyleSheet, Platform} from 'react-native';
import {Colors, Fonts} from '../../themes';
import {generateSize} from '../../helpers';

const style = StyleSheet.create({
  input: {
    backgroundColor: Colors.light,
    borderRadius: generateSize(1, 'width'),
    paddingHorizontal: generateSize(3.2, 'width'),
    height: generateSize(6.2, 'height'),
  },
  inputInvalid: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.danger,
  },
  errorMessage: {
    color: Colors.danger,
    fontFamily: Fonts.base,
    fontSize: generateSize(3, 'width'),
    marginTop: generateSize(0.7, 'height'),
  },
  textArea: {
    minHeight:
      Platform.OS === 'ios'
        ? generateSize(10, 'height')
        : generateSize(8, 'height'),
    height: 'auto',
  },
});

export default style;
