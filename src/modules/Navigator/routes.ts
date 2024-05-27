export const routes = {
  Animation: {
    Root: 'Root',
    Circle: 'Circle',
  },
} as const;

export type RootStackParamList = {
  [routes.Animation.Root]: undefined;
  [routes.Animation.Circle]: undefined;
};
