import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 70,
    fontFamily: 'Arial',
  },
});

export const ReanimatedAnimationScreen = () => {
  const opacity = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(
    () => ({
      opacity: opacity.value,
    }),
    [],
  );

  useEffect(() => {
    opacity.value = withRepeat(withSpring(1, {duration: 5000}), -1);
  }, [opacity]);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.Text style={[styles.text, animatedStyles]}>ABOBA</Animated.Text>
    </SafeAreaView>
  );
};
