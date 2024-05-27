import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {AnimationStack} from './AnimationStack/AnimationStack.tsx';

const Tab = createBottomTabNavigator();

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
