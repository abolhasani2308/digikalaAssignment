import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export type ProductPriceProps = {
  containerStyle?: StyleProp<ViewStyle>;
  value: number;
  discountedPrice: number;
  discountPercentage: number;
  valueStyle?: StyleProp<TextStyle>;
  unitStyle?: StyleProp<TextStyle>;
  discountedPriceStyle?: StyleProp<TextStyle>;
  discountPercentageStyle?: StyleProp<TextStyle>;
  discountedPriceUnitStyle?: StyleProp<TextStyle>;
};
