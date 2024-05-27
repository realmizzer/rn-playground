import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {AnimationStack} from './AnimationStack/AnimationStack.tsx';
import {routes} from './routes.ts';

const Tab = createBottomTabNavigator<typeof routes>();

/**
 * Корневой компонент для навигации по приложению.
 */
export const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name={'Animation'} component={AnimationStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
