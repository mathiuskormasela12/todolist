// ========== App
// import all packages
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import all screens
import {TodoListScreen, EventScreen} from './screens';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TodoList"
          component={TodoListScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Event"
          component={EventScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
