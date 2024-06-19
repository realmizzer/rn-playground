import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import React from 'react';
import {StyleSheet, ViewStyle} from 'react-native';

const SIZE = 100;

interface IProps {
  squareStyles?: ViewStyle;
}

const styles = StyleSheet.create({
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: 'blue',
    opacity: 0.5,
    borderRadius: 12,
  },
});

export const GestureSquare = (props: IProps) => {
  const start = useSharedValue({x: 0, y: 0});
  const offset = useSharedValue({x: 0, y: 0});
  const view = useSharedValue({
    scale: 1,
    opacity: 0.5,
  });

  const gesture = Gesture.Pan()
    .onBegin(() => {
      view.value = {
        scale: 1.2,
        opacity: 1,
      };
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
      view.value = {
        scale: 1,
        opacity: 0.5,
      };
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {translateX: offset.value.x},
      {translateY: offset.value.y},
      {scale: withSpring(view.value.scale)},
    ],
    opacity: withTiming(view.value.opacity),
  }));

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[styles.square, animatedStyles, props?.squareStyles]}
      />
    </GestureDetector>
  );
};
