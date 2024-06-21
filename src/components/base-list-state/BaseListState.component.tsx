import {useTheme} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import styles from './BaseListState.styles';
import {BaseListStateProps} from './BaseListState.types';

export default function BaseListState(
  props: BaseListStateProps,
): React.JSX.Element {
  const {animationSource, text, containerStyle, animationStyle, textStyle} =
    props;
  const {t} = useTranslation();
  const {colors, fonts} = useTheme();

  return (
    <View style={[styles.container, containerStyle]}>
      <LottieView
        autoPlay
        loop={true}
        source={animationSource}
        style={[styles.animation, animationStyle]}
      />
      <Text
        style={[
          styles.text,
          {
            color: colors.text,
          },
          fonts.regular,
          textStyle,
        ]}>
        {t(text)}
      </Text>
    </View>
  );
}
