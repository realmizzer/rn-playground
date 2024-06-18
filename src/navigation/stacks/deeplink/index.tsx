import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from '../../constants/routes.ts';
import {DeeplinkRootScreen} from './screens/DeeplinkRootScreen.tsx';

const Stack = createNativeStackNavigator();

export const DeeplinkStack = () => {
  return (
    <Stack.Navigator initialRouteName={routes.Deeplink.Root.name}>
      <Stack.Screen
        name={routes.Deeplink.Root.name}
        component={DeeplinkRootScreen}
      />
    </Stack.Navigator>
  );
};
