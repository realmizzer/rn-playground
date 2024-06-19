import React from 'react';
import {PreviewCard} from '~/modules/PreviewCard/PreviewCard.tsx';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {RootStackParamList, routes} from '~/navigation/constants/routes.ts';
import {NavigationProp} from '@react-navigation/native';
import {AnimatedCircle} from '~/modules/AnimatedCircle/AnimatedCircle.tsx';
import {defaultScreenStyles} from '~/navigation/constants/styles.ts';

interface IProps {
  navigation: NavigationProp<RootStackParamList, 'animation'>;
}

interface ICard {
  title: string;
  routeName: keyof RootStackParamList;
  children: React.ReactNode;
}

const cards: ICard[] = [
  {
    title: 'Circle',
    routeName: routes.animation.screens.circle,
    children: <AnimatedCircle hasActions={false} />,
  },
  {
    title: 'Reanimated',
    routeName: routes.animation.screens.reanimated,
    children: undefined,
  },
  {
    title: 'PanGesture',
    routeName: routes.animation.screens.gesture,
    children: undefined,
  },
];

const styles = StyleSheet.create({
  list: {
    height: '100%',
  },
  card: {
    marginBottom: 12,
  },
});

// Корневной экран для навигации по стэку с анимациями.
export const AnimationRootScreen = ({navigation}: IProps) => {
  return (
    <SafeAreaView>
      <View style={defaultScreenStyles.container}>
        <ScrollView contentContainerStyle={styles.list}>
          {cards.map((item, index) => (
            <PreviewCard
              key={index}
              title={item.title}
              onPress={() =>
                navigation.navigate(item.routeName as keyof RootStackParamList)
              }
              containerStyle={styles.card}>
              {item.children}
            </PreviewCard>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
