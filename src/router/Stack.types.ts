import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum Screens {
  Products = 'Products',
}

export type StackParamList = {
  Products: undefined;
};

export type StackNavigationProps<T extends Screens> = NativeStackNavigationProp<
  StackParamList,
  T
>;
