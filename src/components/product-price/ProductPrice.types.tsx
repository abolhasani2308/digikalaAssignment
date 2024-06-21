import {StyleProp, TextStyle} from 'react-native';

export type ProductPriceProps = {
  containerStyle?: StyleProp<TextStyle>;
  value: string | number;
};
