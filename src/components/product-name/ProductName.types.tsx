import {StyleProp, TextStyle, TextProps} from 'react-native';

export type ProductNameProps = {
  containerStyle?: StyleProp<TextStyle>;
  value: string;
} & TextProps;
