import {routes} from '../routes.ts';
import {CircleAnimation} from '../../CircleAnimation/CircleAnimation.tsx';
import {AnimationRootScreen} from './AnimationRootScreen.tsx';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const AnimationStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.Animation.Root}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={routes.Animation.Root}
        component={AnimationRootScreen}
      />
      <Stack.Screen
        name={routes.Animation.Circle}
        component={CircleAnimation}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};
