// ========= Todo List Hooks
// import all packages
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {GoToCalendar, RootStackParamList, UseTodoList} from './types';

export const useTodoList: UseTodoList = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const goToCalendar: GoToCalendar = () => {
    navigation.navigate('Event');
  };

  return {goToCalendar};
};
