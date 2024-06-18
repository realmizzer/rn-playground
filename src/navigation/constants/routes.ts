import {animation} from './tabs/animation-tab.ts';
import {settings} from './tabs/settings-tab.ts';
import {deeplink} from './tabs/deeplink-tab.ts';

/**
 * Навигация по приложению. Корневые объекты являются табами, а их дочерние – стэками или экранами.
 */
export const routes = {
  animation,
  settings,
  deeplink,
} as const;

/**
 * Тип с входными данными для навигации на экран.
 */
export type RootStackParamList = {
  [routes.animation.tabName]: undefined;
  [routes.settings.tabName]: undefined;
  [routes.deeplink.tabName]: undefined;
  [routes.animation.screens.circle]: undefined;
  [routes.animation.screens.reanimated]: undefined;
};
