import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export type DiscountedPriceProps = {
  containerStyle?: StyleProp<ViewStyle>;
  value: number;
  valueStyle?: StyleProp<TextStyle>;
  unitStyle?: StyleProp<TextStyle>;
};
