import React from 'react';
import {CircleAnimationScreen} from './screens/CircleAnimationScreen.tsx';
import {AnimationRootScreen} from './screens/AnimationRootScreen.tsx';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HeaderBackButton} from '~/navigation/components/HeaderBackButton.tsx';
import {routes} from '~/navigation/constants/routes.ts';
import {useRoute} from '@react-navigation/native';
import {ReanimatedAnimationScreen} from './screens/ReanimatedAnimationScreen.tsx';
import {PanGestureScreen} from '~/navigation/stacks/animation/screens/PanGestureScreen.tsx';
import {TeachingHoleScreen} from '~/navigation/stacks/animation/screens/TeachingHoleScreen.tsx';

const Stack = createNativeStackNavigator();

// Стэк для уроков с анимациями.
export const AnimationStack = () => {
  const route = useRoute();

  return (
    <Stack.Navigator
      initialRouteName={routes.animation.screens.root}
      screenOptions={{headerShown: false, headerLeft: HeaderBackButton}}>
      <Stack.Screen
        name={routes.animation.screens.root}
        component={AnimationRootScreen}
        initialParams={route.params}
      />
      <Stack.Screen
        name={routes.animation.screens.circle}
        component={CircleAnimationScreen}
        options={{
          headerShown: true,
          title: 'Circle Animation',
        }}
      />
      <Stack.Screen
        name={routes.animation.screens.reanimated}
        component={ReanimatedAnimationScreen}
        options={{
          headerShown: true,
          title: 'Reanimated',
        }}
      />
      <Stack.Screen
        name={routes.animation.screens.gesture}
        component={PanGestureScreen}
        options={{
          headerShown: true,
          title: 'PanGestureHandler',
        }}
      />
      <Stack.Screen
        name={routes.animation.screens.teachingHole}
        component={TeachingHoleScreen}
        options={{
          headerShown: true,
          title: 'TeachingHole',
        }}
      />
    </Stack.Navigator>
  );
};
