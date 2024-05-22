import React, {useCallback, useEffect, useRef} from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';

const ITEM_SIZE = 100;

export const CircleAnimation = () => {
  const circleAnimValue = useRef(new Animated.Value(0.5)).current;
  const crossAnimValue = useRef(new Animated.Value(0)).current;
  const animationRef = useRef<Animated.CompositeAnimation | null>(null);

  const createAnimation = useCallback(() => {
    animationRef.current = Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.spring(circleAnimValue, {toValue: 1, useNativeDriver: true}),
          Animated.spring(circleAnimValue, {
            toValue: 0.5,
            useNativeDriver: true,
          }),
        ]),
        Animated.sequence([
          Animated.spring(crossAnimValue, {
            toValue: 0.2,
            useNativeDriver: true,
          }),
          Animated.spring(crossAnimValue, {
            toValue: 0.8,
            useNativeDriver: true,
          }),
          Animated.spring(crossAnimValue, {toValue: 1, useNativeDriver: true}),
        ]),
      ]),
    );
  }, [circleAnimValue, crossAnimValue]);

  const onStartPress = useCallback(() => {
    createAnimation();
    animationRef.current?.start();
  }, [createAnimation]);

  const onStopPress = () => {
    animationRef.current?.stop();
  };

  useEffect(() => {
    createAnimation();
    onStartPress();
  }, [createAnimation, onStartPress]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.item,
          {
            borderRadius: circleAnimValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0, ITEM_SIZE / 2],
            }),
            opacity: circleAnimValue,
            transform: [
              {scale: circleAnimValue},
              {
                rotate: circleAnimValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
          },
        ]}
      />
      <Button title={'Start'} onPress={onStartPress} />
      <Button title={'Stop'} onPress={onStopPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    backgroundColor: '#5555FF',
  },
});
