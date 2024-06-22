import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export type DiscountPercentageProps = {
  containerStyle?: StyleProp<ViewStyle>;
  value: number;
  valueStyle?: StyleProp<TextStyle>;
};
