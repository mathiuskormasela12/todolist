// ========= Todo List Hooks
// import all packages
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {HandlerFunction, RootStackParamList, UseTodoList} from './types';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../redux/store';
import {increment} from '../../../redux/features/counter/counter.slice';

export const useTodoList: UseTodoList = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useDispatch<AppDispatch>();
  const count: number = useSelector(
    (state: RootState) => state.counterReducer.count,
  );

  const goToCalendar: HandlerFunction = () => {
    navigation.navigate('Event');
  };

  const handleIncrement: HandlerFunction = () => {
    dispatch(increment({count: 1}));
  };

  return {goToCalendar, count, handleIncrement};
};
