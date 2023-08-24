// ========== Todo List Screen
// import all packages
import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import style from './style';

// import all components
import {Container, Card, Modal} from '../../components';
import {useTodoList} from './hooks/useTodoList';

const data = [
  {
    id: 1,
    title: 'Wathing movie',
    date: '2023-10-02',
    time: '03:00 PM',
  },
  {
    id: 2,
    title: 'Learning Java',
    date: '2023-10-01',
    time: '11:00 PM',
  },
  {
    id: 3,
    title: 'Sleeping',
    date: '2023-09-20',
    time: '02:00 PM',
  },
  {
    id: 4,
    title: 'Wathing Anime',
    date: '2023-08-02',
    time: '01:00 PM',
  },
];

export const TodoListScreen: React.FC = () => {
  const {modalRef, handleOpenModal} = useTodoList();

  return (
    <SafeAreaView style={style.hero}>
      <Modal ref={modalRef} />
      <Container>
        <View style={style.header}>
          <Text style={style.title}>Tasks</Text>
          <TouchableOpacity onPress={handleOpenModal}>
            <Text style={style.addTask}>Add Task</Text>
          </TouchableOpacity>
        </View>
        <View style={style.row}>
          {data.map(item => (
            <View style={style.col} key={item.id.toString()}>
              <Card />
            </View>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};
