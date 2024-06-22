import {StyleProp, ViewStyle} from 'react-native';

export type ProductItemProps = {
  data: {
    id: string;
    name: string;
    image: string;
    price: number;
    discountedPrice: number;
    discountPercentage: number;
    description: string;
  };
  animationId: string;
  isEvenIndex: boolean;
  isEndRow: boolean;
  containerStyle?: StyleProp<ViewStyle>;
};
