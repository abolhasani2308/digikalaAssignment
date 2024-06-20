import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import styles from './Landing.styles';

export default function Landing(): React.JSX.Element {
  const {colors} = useTheme();
  return <View style={[styles.container, {backgroundColor: colors.primary}]} />;
}
