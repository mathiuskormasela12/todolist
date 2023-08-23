// ========== Event Screen
// import all packages
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import style from './style';

// import all components
import {Container} from '../../components';

export const EventScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <Container>
        <Text style={style.title}>Event Screen</Text>
      </Container>
    </SafeAreaView>
  );
};
