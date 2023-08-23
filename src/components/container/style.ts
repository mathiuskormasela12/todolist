// ========== Style
// import all packages
import {StyleSheet} from 'react-native';
import {generateSize} from '../../helpers';

const style = StyleSheet.create({
  container: {
    width: generateSize(90, 'width'),
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default style;
