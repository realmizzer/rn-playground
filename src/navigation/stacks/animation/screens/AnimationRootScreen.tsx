import React from 'react';
import {PreviewCard} from '../../../../modules/PreviewCard/PreviewCard.tsx';
import {SafeAreaView, View} from 'react-native';
import {RootStackParamList, routes} from '../../../constants/routes.ts';
import {NavigationProp} from '@react-navigation/native';
import {AnimatedCircle} from '../../../../modules/AnimatedCircle/AnimatedCircle.tsx';
import {defaultScreenStyles} from '../../../constants/styles.ts';

interface IProps {
  navigation: NavigationProp<RootStackParamList, 'animation'>;
}

// Корневной экран для навигации по стэку с анимациями.
export const AnimationRootScreen = ({navigation}: IProps) => {
  const _onPress = () => {
    navigation.navigate(routes.animation.screens.circle);
  };

  return (
    <SafeAreaView>
      <View style={defaultScreenStyles.container}>
        <PreviewCard title={'Circle'} onPress={_onPress}>
          <AnimatedCircle hasActions={false} />
        </PreviewCard>
      </View>
    </SafeAreaView>
  );
};
