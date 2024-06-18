import React from 'react';
import {CircleAnimationScreen} from './screens/CircleAnimationScreen.tsx';
import {AnimationRootScreen} from './screens/AnimationRootScreen.tsx';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HeaderBackButton} from '../../components/HeaderBackButton.tsx';
import {routes} from '../../constants/routes.ts';
import {useRoute} from '@react-navigation/native';

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
        }}
      />
    </Stack.Navigator>
  );
};
