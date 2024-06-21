import {StyleProp, ViewStyle} from 'react-native';

export type ProductItemProps = {
  containerStyle?: StyleProp<ViewStyle>;
  id: string;
  name: string;
  image: string;
  price: string | number;
  description: string;
  isEvenIndex: boolean;
  isEndRow: boolean;
};
