import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {AnimationObject} from 'react-native-reanimated';

export type BaseListStateProps = {
  containerStyle?: StyleProp<ViewStyle>;
  animationSource: string | AnimationObject | {uri: string} | undefined;
  text: string;
  animationStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};
