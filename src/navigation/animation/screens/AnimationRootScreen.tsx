import React from 'react';
import {PreviewCard} from '../../../modules/PreviewCard/PreviewCard.tsx';
import {SafeAreaView, View} from 'react-native';
import {RootStackParamList, routes} from '../../routes.ts';
import {NavigationProp} from '@react-navigation/native';
import {AnimatedCircle} from '../../../modules/AnimatedCircle/AnimatedCircle.tsx';
import {defaultScreenStyles} from '../../styles.ts';

interface IProps {
  navigation: NavigationProp<RootStackParamList, 'Root'>;
}

// Корневной экран для навигации по стэку с анимациями.
export const AnimationRootScreen = ({navigation}: IProps) => {
  const _onPress = (routeName: keyof typeof routes.Animation) => {
    navigation.navigate(routeName);
  };

  return (
    <SafeAreaView>
      <View style={defaultScreenStyles.container}>
        <PreviewCard title={'Circle'} onPress={() => _onPress('Circle')}>
          <AnimatedCircle hasActions={false} />
        </PreviewCard>
      </View>
    </SafeAreaView>
  );
};
