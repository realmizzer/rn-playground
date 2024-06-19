import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {GestureSquare} from '~/modules/GestureSquare/GestureSquare.tsx';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const PanGestureScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <GestureSquare />
    </SafeAreaView>
  );
};
