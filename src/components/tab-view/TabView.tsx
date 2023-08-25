// =========== Tab View
// import all packages
import React, {useState} from 'react';
import {SafeAreaView, View, useWindowDimensions, Text} from 'react-native';
import {TabView as ReactTabView, SceneMap, TabBar} from 'react-native-tab-view';

// import all screens
import {TodoListScreen, EventScreen} from '../../screens';
import style from './style';
import {Container} from '../container/Container';

const renderScene = SceneMap({
  todoList: TodoListScreen,
  event: EventScreen,
});

export const TabView: React.FC = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'todoList',
      title: 'Todo List',
    },
    {
      key: 'event',
      title: 'Event',
    },
  ]);

  return (
    <SafeAreaView style={style.hero}>
      <View style={style.header}>
        <Text style={style.text}>Todo List</Text>
      </View>
      <ReactTabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={renderProps => (
          <View style={style.tabView}>
            <Container>
              <TabBar
                {...renderProps}
                style={style.navbar}
                indicatorStyle={style.indicatorStyle}
              />
            </Container>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
