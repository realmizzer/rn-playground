import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {
  IThemeSwitchButtonProps,
  ThemeSwitchButton,
} from '~/modules/AppTheme/components/ThemeSwitchButton.tsx';
import {FlatGrid} from 'react-native-super-grid';
import {darkTheme} from '~/modules/AppTheme/themes/dark-theme.ts';
import {lightTheme} from '~/modules/AppTheme/themes/light-theme.ts';
import {useAppTheme} from '~/modules/AppTheme/hooks/useAppTheme.ts';
import {ThemesEnum} from '~/modules/AppTheme/themes/ThemesEnum.ts';

const styles = StyleSheet.create({
  container: {},
});

export const ThemeSwitch = () => {
  const theme = useAppTheme();

  const onPress = (name: ThemesEnum) => {
    theme.setTheme(name);
  };

  const data = useMemo<IThemeSwitchButtonProps[]>(() => {
    return [
      {
        title: 'dark',
        containerStyle: {
          backgroundColor: darkTheme.action,
        },
        textStyle: {
          color: darkTheme.text,
        },
        onPress: () => onPress(ThemesEnum.dark),
      },
      {
        title: 'light',
        containerStyle: {
          backgroundColor: lightTheme.action,
        },
        textStyle: {
          color: lightTheme.text,
        },
        onPress: () => onPress(ThemesEnum.light),
      },
    ];
  }, []);

  return (
    <FlatGrid
      data={data}
      renderItem={({item}) => <ThemeSwitchButton {...item} />}
      style={[styles.container]}
    />
  );
};
