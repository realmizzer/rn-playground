import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {AnimationStack} from './stacks/animation';
import {SettingsStack} from './stacks/settings';
import {DeeplinkStack} from './stacks/deeplink';
import {linking} from './constants/linking.ts';
import {routes} from './constants/routes.ts';

const Tab = createBottomTabNavigator<typeof routes>();

/**
 * Корневой компонент для навигации по приложению.
 */
export const Navigator = () => {
  return (
    <NavigationContainer linking={linking}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name={'Animation'} component={AnimationStack} />
        <Tab.Screen name={'Settings'} component={SettingsStack} />
        <Tab.Screen name={'Deeplink'} component={DeeplinkStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
