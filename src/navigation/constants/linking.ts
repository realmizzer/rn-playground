import {LinkingOptions} from '@react-navigation/native';
import {RootStackParamList, routes} from './routes.ts';

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['rn-playground://', 'https://rn-playground.com'],
  config: {
    screens: {
      [routes.Animation.Root.name]: routes.Animation.Root.link,
      [routes.Animation.Circle.name]: routes.Animation.Circle.link,
      [routes.Settings.Root.name]: routes.Settings.Root.link,
      [routes.Deeplink.Root.name]: routes.Deeplink.Root.link,
    },
  },
};
