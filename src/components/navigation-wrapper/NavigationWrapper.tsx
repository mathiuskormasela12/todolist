// =========== Navigation Wrapper
// import all packages
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import all components
import {TabView} from '../../components';

const Stack = createNativeStackNavigator();

export const NavigationWrapper: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TodoList"
          component={TabView}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
