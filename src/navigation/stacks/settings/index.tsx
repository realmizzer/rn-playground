import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from '../../constants/routes.ts';
import {SettingsRootScreen} from './screens/SettingsRootScreen.tsx';
import {useRoute} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export const SettingsStack = () => {
  const route = useRoute();

  return (
    <Stack.Navigator initialRouteName={routes.settings.screens.root}>
      <Stack.Screen
        name={routes.settings.screens.root}
        component={SettingsRootScreen}
        options={{
          title: 'Settings',
        }}
        initialParams={route.params}
      />
    </Stack.Navigator>
  );
};
