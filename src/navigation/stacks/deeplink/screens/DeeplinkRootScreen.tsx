import React, {useMemo} from 'react';
import {PreviewCard} from '../../../../modules/PreviewCard/PreviewCard.tsx';
import {SafeAreaView, ScrollView} from 'react-native';
import {defaultScreenStyles} from '../../../constants/styles.ts';

export const DeeplinkRootScreen = () => {
  const cards = useMemo(() => {
    return Array.from(Array(10).keys());
  }, []);

  return (
    <SafeAreaView style={defaultScreenStyles.container}>
      <ScrollView>
        {cards.map((_, index) => (
          <PreviewCard key={index} title={`Страница ${index}`} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
