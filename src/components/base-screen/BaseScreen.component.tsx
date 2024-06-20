import {useTheme} from '@react-navigation/native';
import React, {PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native';
import styles from './BaseScreen.styles';
import {BaseScreenProps} from './BaseScreen.types';

export default function BaseScreen(
  props: PropsWithChildren<BaseScreenProps>,
): React.JSX.Element {
  const {children, containerStyle} = props;
  const {colors} = useTheme();

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
        },
        containerStyle,
      ]}>
      {children}
    </SafeAreaView>
  );
}
