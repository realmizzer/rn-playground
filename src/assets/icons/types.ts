import {NumberProp} from 'react-native-svg';
import {StyleProp, ViewStyle} from 'react-native';

export interface ISvgIcon {
  width?: NumberProp;
  height?: NumberProp;
  color?: string;
  strokeWidth?: number;
  containerStyle?: StyleProp<ViewStyle>;
}
