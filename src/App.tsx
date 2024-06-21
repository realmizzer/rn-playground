import React from 'react';
import {Navigator} from './navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AppThemeProvider} from '~/modules/AppTheme/AppThemeProvider.tsx';

export default function App() {
  return (
    <GestureHandlerRootView>
      <AppThemeProvider>
        <Navigator />
      </AppThemeProvider>
    </GestureHandlerRootView>
  );
}
