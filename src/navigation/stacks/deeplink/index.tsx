import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DeeplinkRootScreen} from './screens/DeeplinkRootScreen.tsx';
import {routes} from '../../constants/routes.ts';
import {useRoute} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export const DeeplinkStack = () => {
  const route = useRoute();

  return (
    <Stack.Navigator initialRouteName={routes.deeplink.screens.root}>
      <Stack.Screen
        name={routes.deeplink.screens.root}
        component={DeeplinkRootScreen}
        initialParams={route.params}
      />
    </Stack.Navigator>
  );
};
