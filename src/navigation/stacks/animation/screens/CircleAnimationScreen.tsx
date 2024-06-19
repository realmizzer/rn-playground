import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {AnimatedCircle} from '~/modules/AnimatedCircle/AnimatedCircle.tsx';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// Тест с анимацией превращения квадрата в круг.
export const CircleAnimationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AnimatedCircle hasActions={true} />
    </SafeAreaView>
  );
};
