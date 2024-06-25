import Svg, {Path} from 'react-native-svg';
import React from 'react';

export const HoleCircle = () => {
  return (
    <Svg width="460" height="460" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M230 460C357.025 460 460 357.025 460 230C460 102.975 357.025 0 230 0C102.975 0 0 102.975 0 230C0 357.025 102.975 460 230 460ZM330 238H300V268H330V238Z"
        fill="#FF5531"
      />
    </Svg>
  );
};
