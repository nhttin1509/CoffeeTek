import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { colors, parameters } from '../global/styles';
export default function Header() {
  return (
    <View style={style.header}>
      <Text>Hello</Text>
    </View>
  );
}

const style= StyleSheet.create({
    header:{
        flexDirection: 'row',
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,
    }
})