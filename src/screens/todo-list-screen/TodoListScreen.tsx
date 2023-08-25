// ========== Todo List Screen
// import all packages
import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import style from './style';

// import all components
import {Container, Card, Modal} from '../../components';
import {useTodoList} from './hooks/useTodoList';

export const TodoListScreen: React.FC = () => {
  const {
    modalRef,
    handleOpenModal,
    typeModal,
    handleTypeModal,
    tasks,
    handleGetDetail,
    handleResetForm,
  } = useTodoList();

  return (
    <SafeAreaView style={style.hero}>
      <Modal type={typeModal} ref={modalRef} />
      <Container flex={1}>
        <View style={style.header}>
          <Text style={style.title}>Tasks</Text>
          <TouchableOpacity
            onPress={() => {
              handleResetForm();
              handleTypeModal('Add');
              handleOpenModal();
            }}>
            <Text style={style.addTask}>Add Task</Text>
          </TouchableOpacity>
        </View>
        <View style={style.row}>
          <FlatList
            scrollEnabled
            data={tasks}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <View style={style.col} key={item.id.toString()}>
                <Card
                  title={item.taskName}
                  description={item.taskDescription}
                  time={item.time}
                  onPress={() => {
                    handleGetDetail(item.id);
                  }}
                />
              </View>
            )}
          />
        </View>
      </Container>
    </SafeAreaView>
  );
};
