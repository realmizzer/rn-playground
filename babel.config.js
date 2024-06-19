module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
        alias: {
          '~': './src',
          '~modules': './src/modules',
          '~navigation': './src/navigation',
        },
      },
    ],
    ['react-native-reanimated/plugin'],
  ],
};
