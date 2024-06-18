import React from 'react';
import {routes} from '../../constants/routes.ts';
import {CircleAnimationScreen} from './screens/CircleAnimationScreen.tsx';
import {AnimationRootScreen} from './screens/AnimationRootScreen.tsx';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HeaderBackButton} from '../../components/HeaderBackButton.tsx';

const Stack = createNativeStackNavigator();

// Стэк для уроков с анимациями.
export const AnimationStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.Animation.Root.name}
      screenOptions={{headerShown: false, headerLeft: HeaderBackButton}}>
      <Stack.Screen
        name={routes.Animation.Root.name}
        component={AnimationRootScreen}
      />
      <Stack.Screen
        name={routes.Animation.Circle.name}
        component={CircleAnimationScreen}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};
