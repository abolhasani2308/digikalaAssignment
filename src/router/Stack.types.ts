import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum Screens {
  Products = 'Products',
  Details = 'Details',
}

export type StackParamList = {
  Products: undefined;
  Details: {
    id: string;
    name: string;
    image: string;
    price: number;
    discountedPrice: number;
    discountPercentage: number;
    description: string;
  };
};

export type StackNavigationProps<T extends Screens> = NativeStackNavigationProp<
  StackParamList,
  T
>;
