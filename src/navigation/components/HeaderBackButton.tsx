import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export const HeaderBackButton = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>Back</Text>
    </TouchableOpacity>
  );
};
