import React from 'react';
import {SafeAreaView} from 'react-native';
import {AppThemeSwitch} from '../../../../modules/AppTheme/AppThemeSwitch.tsx';
import {defaultScreenStyles} from '../../../constants/styles.ts';

export const SettingsRootScreen = () => {
  return (
    <SafeAreaView style={defaultScreenStyles.container}>
      <AppThemeSwitch />
    </SafeAreaView>
  );
};
