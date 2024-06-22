import {useTheme} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import animation from '../../assets/images/index';
import styles from './Error.styles';

export default function Error(): React.JSX.Element {
  const {t} = useTranslation();
  const {colors, fonts} = useTheme();

  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop={true}
        source={animation.error}
        style={styles.animation}
      />
      <Text
        style={[
          styles.error,
          {
            color: colors.text,
          },
          fonts.regular,
        ]}>
        {t('error')}
      </Text>
    </View>
  );
}
