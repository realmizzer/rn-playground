import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TeachingHole} from '~/modules/TeachingHole/TeachingHole.tsx';

const styles = StyleSheet.create({
  container: {},
});

export const TeachingHoleScreen = () => {
  return (
    <View style={styles.container}>
      <TeachingHole />
    </View>
  );
};
