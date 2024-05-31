import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from '../routes.ts';
import {SettingsRootScreen} from './screens/SettingsRootScreen.tsx';

const Stack = createNativeStackNavigator();

export const SettingsStack = () => {
  return (
    <Stack.Navigator initialRouteName={routes.Settings.Root}>
      <Stack.Screen
        name={routes.Settings.Root}
        component={SettingsRootScreen}
        options={{
          title: 'Settings',
        }}
      />
    </Stack.Navigator>
  );
};
