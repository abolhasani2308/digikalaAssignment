import {StyleProp, TextInputProps, ViewStyle} from 'react-native';

export type SearchInputProps = {
  containerStyle?: StyleProp<ViewStyle>;
} & TextInputProps;
