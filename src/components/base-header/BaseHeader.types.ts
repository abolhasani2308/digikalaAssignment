import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export type BaseHeaderProps = {
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  title: string;
};
