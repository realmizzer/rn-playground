import React from 'react';
import {PreviewCard} from '~/modules/PreviewCard/PreviewCard.tsx';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList, routes} from '~/navigation/constants/routes.ts';
import {NavigationProp} from '@react-navigation/native';
import {AnimatedCircle} from '~/modules/AnimatedCircle/AnimatedCircle.tsx';
import {defaultScreenStyles} from '~/navigation/constants/styles.ts';

interface IProps {
  navigation: NavigationProp<RootStackParamList, 'animation'>;
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 12,
  },
});

// Корневной экран для навигации по стэку с анимациями.
export const AnimationRootScreen = ({navigation}: IProps) => {
  return (
    <SafeAreaView>
      <View style={defaultScreenStyles.container}>
        <PreviewCard
          containerStyle={styles.card}
          title={'Circle'}
          onPress={() => navigation.navigate(routes.animation.screens.circle)}>
          <AnimatedCircle hasActions={false} />
        </PreviewCard>
        <PreviewCard
          containerStyle={styles.card}
          title={'Reanimated'}
          onPress={() =>
            navigation.navigate(routes.animation.screens.reanimated)
          }>
          <Text>da</Text>
        </PreviewCard>
      </View>
    </SafeAreaView>
  );
};
