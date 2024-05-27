import {PreviewCard} from '../../PreviewCard/PreviewCard.tsx';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {CircleAnimation} from '../../CircleAnimation/CircleAnimation.tsx';
import {RootStackParamList, routes} from '../routes.ts';
import {NavigationProp} from '@react-navigation/native';

interface IProps {
  navigation: NavigationProp<RootStackParamList, 'Root'>;
}

export const AnimationRootScreen = ({navigation}: IProps) => {
  const _onPress = (routeName: keyof typeof routes.Animation) => {
    navigation.navigate(routeName);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <PreviewCard title={'Circle'} onPress={() => _onPress('Circle')}>
          <CircleAnimation />
        </PreviewCard>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
  },
});
