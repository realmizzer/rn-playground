import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CircleAnimation} from '../CircleAnimation/CircleAnimation.tsx';
import {routes} from './routes.ts';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routes.CircleAnimation}>
        <Stack.Screen
          name={routes.CircleAnimation}
          component={CircleAnimation}
          options={{
            title: 'Circle animation',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
