import {ReactNode} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

export type BaseScreenProps = {
  children: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
};
