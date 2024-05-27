/**
 * Навигация по приложению. Корневые объекты являются табами, а их дочерние – стэками или экранами.
 */
export const routes = {
  Animation: {
    Root: 'Root',
    Circle: 'Circle',
  },
} as const;

/**
 * Тип с входными данными для навигации на экран.
 */
export type RootStackParamList = {
  [routes.Animation.Root]: undefined;
  [routes.Animation.Circle]: undefined;
};
