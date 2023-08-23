// ========== Todo List Screen
// import all packages
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import style from './style';

// import all components
import {Button, Container} from '../../components';
import {useTodoList} from './hooks/useTodoList';

export const TodoListScreen: React.FC = () => {
  const {goToCalendar} = useTodoList();

  return (
    <SafeAreaView>
      <Container>
        <Text style={style.title}>Hello Todo List</Text>
        <Button onPress={goToCalendar}>Calendar</Button>
      </Container>
    </SafeAreaView>
  );
};
