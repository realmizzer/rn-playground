import React, {useEffect, useMemo, useState} from 'react';
import {
  LayoutChangeEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ERNHoleViewTimingFunction,
  RNHole,
  RNHoleView,
} from 'react-native-hole-view';
import {Icons} from '~/assets/icons';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    position: 'absolute',
    left: 20,
    top: 10,
    fontSize: 16,
  },
  star: {
    position: 'absolute',
    top: 300,
    left: 50,
    width: 100,
    height: 100,
  },
  pen: {
    position: 'absolute',
    bottom: 60,
    right: 20,
    width: 60,
    height: 60,
  },
  hole: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  circle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 500,
    height: 500,
    borderRadius: 250,
    backgroundColor: 'orange',
  },
  nextButton: {
    marginBottom: 20,
  },
  blackover: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

const calculateRadius = (width: number, height: number) => {
  if (width === height) {
    return width / 2;
  }

  return 8;
  // return Math.sqrt(Math.pow(2, width) + Math.pow(2, height)) / 2;
};

export const TeachingHole = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState<Record<string, RNHole>>({});
  const [holes, setHoles] = useState<RNHole[]>([
    {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    },
  ]);

  const offset = useSharedValue({
    x: 0,
    y: 0,
  });

  const animatedCircle = useAnimatedStyle(() => ({
    left: offset.value.x,
    top: offset.value.y,
  }));

  const stepsCount = useMemo(() => {
    return Object.entries(steps).length;
  }, [steps]);

  const onLayout = (name: string, e: LayoutChangeEvent) => {
    const layout = e.nativeEvent.layout;

    const padding = 8;

    const x = layout.x - padding / 2;
    const y = layout.y - padding / 2;
    const width = layout.width + padding;
    const height = layout.height + padding;

    setSteps(prev => ({
      ...prev,
      [name]: {
        x,
        y,
        width,
        height,
        borderRadius: calculateRadius(width, height),
      },
    }));
  };

  const next = () => {
    if (currentStep === stepsCount - 1) {
      setCurrentStep(0);
      return;
    }
    setCurrentStep(prev => prev + 1);
  };

  useEffect(() => {
    if (stepsCount === 0) {
      return;
    }

    const hole = Object.values(steps);
    const currentHole = hole[currentStep];

    offset.value = withTiming({
      x: currentHole.x - 250 + currentHole.width / 2,
      y: currentHole.y - 250 + currentHole.height / 2,
    });

    setHoles([currentHole]);
  }, [stepsCount, steps, currentStep, offset]);

  return (
    <View style={styles.container}>
      <Text onLayout={e => onLayout('text', e)} style={styles.text}>
        some text
      </Text>
      <View onLayout={e => onLayout('starfall', e)} style={styles.star}>
        <Icons.StarFall width={'100%'} height={'100%'} />
      </View>
      <View onLayout={e => onLayout('pensquare', e)} style={styles.pen}>
        <Icons.PenSquare width={'100%'} height={'100%'} />
      </View>
      <RNHoleView
        style={styles.hole}
        holes={holes}
        animation={{
          timingFunction: ERNHoleViewTimingFunction.EASE_OUT,
          duration: 200,
        }}>
        <View style={styles.blackover} />
        <Animated.View style={[styles.circle, animatedCircle]} />
      </RNHoleView>
      <TouchableOpacity style={styles.nextButton} onPress={next}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
};
