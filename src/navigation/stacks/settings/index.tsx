import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from '../../constants/routes.ts';
import {SettingsRootScreen} from './screens/SettingsRootScreen.tsx';

const Stack = createNativeStackNavigator();

export const SettingsStack = () => {
  return (
    <Stack.Navigator initialRouteName={routes.Settings.Root.name}>
      <Stack.Screen
        name={routes.Settings.Root.name}
        component={SettingsRootScreen}
        options={{
          title: 'Settings',
        }}
      />
    </Stack.Navigator>
  );
};
