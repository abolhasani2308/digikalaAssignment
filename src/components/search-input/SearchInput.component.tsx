import {useTheme} from '@react-navigation/native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {TextInput} from 'react-native';
import styles from './SearchInput.styles';
import {SearchInputProps} from './SearchInput.types';

export default function SearchInput(
  props: SearchInputProps,
): React.JSX.Element {
  const {colors, fonts} = useTheme();
  const {t} = useTranslation();
  return (
    <TextInput
      style={[
        styles.container,
        fonts.regular,
        {
          backgroundColor: colors.card,
        },
      ]}
      placeholder={t('search')}
      placeholderTextColor={'#8D9098'}
      returnKeyType={'search'}
      {...props}
    />
  );
}
