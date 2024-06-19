import React from 'react';
import {Navigator} from './navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView>
      <Navigator />
    </GestureHandlerRootView>
  );
}
