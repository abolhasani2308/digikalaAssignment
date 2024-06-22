import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export type BaseListStateProps = {
  containerStyle?: StyleProp<ViewStyle>;
  animationSource: string | object | {uri: string};
  text?: string;
  animationStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  isLoop?: boolean;
};
