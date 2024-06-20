import {useTheme} from '@react-navigation/native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {TextInput} from 'react-native';
import {SearchInputProps} from './SearchInput.types';
import styles from './SearchInput.styles';

export default function SearchInput(
  props: React.FC<SearchInputProps>,
): React.JSX.Element {
  const {colors, fonts} = useTheme();
  const {t} = useTranslation();
  return (
    <TextInput
      style={[
        styles.container,
        fonts.regular,
        {
          backgroundColor: colors.field,
        },
      ]}
      placeholder={t('search')}
      placeholderTextColor={colors.txt_3}
      returnKeyType={'search'}
      {...props}
    />
  );
}
