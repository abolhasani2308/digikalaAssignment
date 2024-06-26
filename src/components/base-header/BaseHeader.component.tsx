import {useTheme} from '@react-navigation/native';
import React, {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';
import styles from './BaseHeader.styles';
import {BaseHeaderProps} from './BaseHeader.types';

export default function BaseHeader(
  props: PropsWithChildren<BaseHeaderProps>,
): React.JSX.Element {
  const {containerStyle, title, children, titleStyle} = props;
  const {colors, fonts} = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.primaryLight,
        },
        containerStyle,
      ]}>
      <Text
        style={[
          styles.title,
          {
            color: colors.primary,
          },
          fonts.bold,
          titleStyle,
        ]}>
        {title}
      </Text>
      {children}
    </View>
  );
}
