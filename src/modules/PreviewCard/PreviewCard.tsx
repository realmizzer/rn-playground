import {Pressable, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {PropsWithChildren, useCallback} from 'react';

interface IProps {
  title: string;
  containerStyle?: ViewStyle;

  onPress?(): void;
}

export const PreviewCard = ({
  title,
  containerStyle,
  onPress,
  children,
}: PropsWithChildren<IProps>) => {
  const _onPress = useCallback(() => {
    onPress && onPress();
  }, [onPress]);

  return (
    <Pressable onPress={_onPress} style={[styles.container, containerStyle]}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.children}>{children}</View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 150,
    borderRadius: 4,
    backgroundColor: '#FFF',
    shadowColor: '#283d53',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  text: {
    fontWeight: '700',
    fontSize: 32,
  },
  children: {
    position: 'absolute',
    right: 32,
    bottom: 16,
  },
});
