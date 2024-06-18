/**
 * Навигация по приложению. Корневые объекты являются табами, а их дочерние – стэками или экранами.
 */
export const routes = {
  Animation: {
    Root: {
      name: 'AnimationRoot',
      link: 'animation',
    },
    Circle: {
      name: 'Circle',
      link: 'animation/circle',
    },
  },
  Settings: {
    Root: {
      name: 'SettingsRoot',
      link: 'settings',
    },
  },
  Deeplink: {
    Root: {
      name: 'DeeplinkRoot',
      link: 'deeplink',
    },
  },
} as const;

/**
 * Тип с входными данными для навигации на экран.
 */
export type RootStackParamList = {
  [routes.Animation.Root.name]: undefined;
  [routes.Animation.Circle.name]: undefined;

  [routes.Settings.Root.name]: undefined;

  [routes.Deeplink.Root.name]: undefined;
};
