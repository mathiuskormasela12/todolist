// ========== Card
// import all packages
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from './style';
import {ICardProps} from './types';

export const Card: React.FC<ICardProps> = ({
  time,
  title,
  description,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style.card}>
      <View>
        <Text style={style.title}>{title}</Text>
        <Text style={style.text}>{description.slice(0, 15).concat('...')}</Text>
      </View>
      <Text style={style.text}>{time}</Text>
    </TouchableOpacity>
  );
};
