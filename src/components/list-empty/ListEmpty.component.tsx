import LottieView from 'lottie-react-native';
import React from 'react';
import {View} from 'react-native';
import animation from '../../assets/images/index';
import styles from './ListEmpty.styles';

export default function Loading(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop={false}
        source={animation.empty}
        style={styles.animation}
      />
    </View>
  );
}
