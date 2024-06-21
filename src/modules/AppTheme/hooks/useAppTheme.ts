import {useContext} from 'react';
import {AppThemeContext} from '~/modules/AppTheme/AppThemeProvider.tsx';

export const useAppTheme = () => {
  const context = useContext(AppThemeContext);

  if (!context) {
    throw new Error('AppThemeContext must be created');
  }

  return context;
};
