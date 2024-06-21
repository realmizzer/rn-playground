import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeSwitch} from '~/modules/AppTheme/components/ThemeSwitch.tsx';

export const SettingsRootScreen = () => {
  return (
    <SafeAreaView>
      <ThemeSwitch />
    </SafeAreaView>
  );
};
