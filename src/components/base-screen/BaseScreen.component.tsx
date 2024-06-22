import {useTheme} from '@react-navigation/native';
import React, {PropsWithChildren, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../redux/Hooks';
import Error from '../error/Error.component';
import Loading from '../loading/Loading.component';
import styles from './BaseScreen.styles';
import {BaseScreenProps} from './BaseScreen.types';

export default function BaseScreen(
  props: PropsWithChildren<BaseScreenProps>,
): React.JSX.Element {
  const {children, containerStyle} = props;
  const {colors} = useTheme();
  const isLoading = useAppSelector(state => state.fetching.isLoading);
  const isError = useAppSelector(state => state.fetching.isError);

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
        },
        containerStyle,
      ]}>
      {isLoading ? <Loading /> : isError ? <Error /> : children}
    </SafeAreaView>
  );
}
