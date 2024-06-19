import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

const SIZE = 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: 'blue',
    opacity: 0.5,
    borderRadius: 12,
  },
});

export const PanGestureScreen = () => {
  const isPressed = useSharedValue(false);
  const start = useSharedValue({x: 0, y: 0});
  const offset = useSharedValue({x: 0, y: 0});

  const gesture = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true;
    })
    .onUpdate(e => {
      offset.value = {
        x: e.translationX + start.value.x,
        y: e.translationY + start.value.y,
      };
    })
    .onEnd(() => {
      offset.value = withSpring(
        {
          x: start.value.x,
          y: start.value.y,
        },
        {
          duration: 2000,
        },
      );
    })
    .onFinalize(() => {
      isPressed.value = false;
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {translateX: offset.value.x},
      {translateY: offset.value.y},
      {scale: withSpring(isPressed ? 1.2 : 1)},
    ],
    opacity: isPressed ? 1 : 0.5,
  }));

  return (
    <SafeAreaView style={styles.container}>
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.square, animatedStyles]} />
      </GestureDetector>
    </SafeAreaView>
  );
};
