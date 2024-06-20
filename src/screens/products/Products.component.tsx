import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import styles from './Products.styles';
import BaseScreen from '../../components/base-screen/BaseScreen.component';

export default function Landing(): React.JSX.Element {
  const {colors} = useTheme();
  return (
    <BaseScreen>
      <></>
    </BaseScreen>
  );
}
