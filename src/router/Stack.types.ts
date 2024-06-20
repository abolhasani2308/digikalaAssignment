import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum Screens {
  Landing = 'Landing',
}

export type StackParamList = {
  Landing: undefined;
};

export type StackNavigationProps<T extends Screens> = NativeStackNavigationProp<
  StackParamList,
  T
>;
