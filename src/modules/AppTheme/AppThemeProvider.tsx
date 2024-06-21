import React, {
  createContext,
  PropsWithChildren,
  useMemo,
  useState,
} from 'react';
import {IAppThemeColors} from '~/modules/AppTheme/themes/IAppThemeColors.ts';
import {lightTheme} from '~/modules/AppTheme/themes/light-theme.ts';
import {darkTheme} from '~/modules/AppTheme/themes/dark-theme.ts';
import {ThemesEnum} from '~/modules/AppTheme/themes/ThemesEnum.ts';

interface IAppThemeContext {
  colors: IAppThemeColors;

  setTheme(name: ThemesEnum): void;
}

export const AppThemeContext = createContext<IAppThemeContext | null>(null);

export const AppThemeProvider = ({children}: PropsWithChildren) => {
  const [colors, setColors] = useState<IAppThemeColors>(lightTheme);

  const themes = useMemo<Record<ThemesEnum, IAppThemeColors>>(() => {
    return {
      light: lightTheme,
      dark: darkTheme,
    };
  }, []);

  const setTheme = (name: ThemesEnum) => {
    setColors(themes[name]);
  };

  const value: IAppThemeContext = {
    colors,
    setTheme,
  };

  return (
    <AppThemeContext.Provider value={value}>
      {children}
    </AppThemeContext.Provider>
  );
};
