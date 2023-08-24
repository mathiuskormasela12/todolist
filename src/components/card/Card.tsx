// ========== Card
// import all packages
import React from 'react';
import {View, Text} from 'react-native';
import style from './style';

export const Card: React.FC = () => {
  return (
    <View style={style.card}>
      <View>
        <Text style={style.title}>Watching movie</Text>
        <Text style={style.text}>2023-05-21</Text>
      </View>
      <Text style={style.text}>03:00 PM</Text>
    </View>
  );
};
