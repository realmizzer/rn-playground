import {Pressable, StyleSheet, Text, TextStyle, ViewStyle} from 'react-native';
import React from 'react';

export interface IThemeSwitchButtonProps {
  title: string;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;

  onPress?(): void;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    shadowColor: '#283d53',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    height: 160,
    borderRadius: 8,
  },
  title: {
    position: 'absolute',
    right: 12,
    bottom: 6,
    fontFamily: 'Arial',
    fontSize: 18,
  },
});

export const ThemeSwitchButton = (props: IThemeSwitchButtonProps) => {
  const onPress = () => {
    props.onPress?.();
  };

  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, props.containerStyle]}>
      <Text style={[styles.title, props.textStyle]}>{props.title}</Text>
    </Pressable>
  );
};
