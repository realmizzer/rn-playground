import {LinkingOptions} from '@react-navigation/native';
import {RootStackParamList, routes} from './routes.ts';

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['rn-playground://', 'https://rn-playground.com'],
  config: {
    screens: {
      [routes.animation.tabName]: {
        path: routes.animation.tabName,
        screens: {
          [routes.animation.screens.root]: routes.animation.screens.root,
          [routes.animation.screens.circle]: routes.animation.screens.circle,
        },
      },
      [routes.settings.tabName]: {
        path: routes.settings.tabName,
        screens: {
          [routes.settings.screens.root]: routes.settings.screens.root,
        },
      },
      [routes.deeplink.tabName]: {
        path: routes.deeplink.tabName,
        screens: {
          [routes.deeplink.screens.root]: routes.deeplink.screens.root,
        },
      },
    },
  },
};
