/**
 * It is advisable to conduct searches on the server side. However, due to the limitations of the jsonplaceholder service
 * in terms of search capabilities, the search operation has been carried out on the client side.
 * This is not considered a best practice, and it would have been more effective to create a separate endpoint for searches and
 * send a query to the server using a query string. The server would then perform the search operation on the product names and
 * send the results to the client for updating.
 */

import {useTheme} from '@react-navigation/native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {TextInput} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../redux/Hooks';
import {setQuery} from '../../redux/features/query/QuerySlice';
import styles from './SearchInput.styles';
import {SearchInputProps} from './SearchInput.types';

export default function SearchInput(
  props: SearchInputProps,
): React.JSX.Element {
  const {colors, fonts} = useTheme();
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  const query = useAppSelector(state => state.query.value);

  function onChangeText(value: string) {
    dispatch(setQuery(value));
  }

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
      placeholderTextColor={colors.text4}
      returnKeyType={'search'}
      value={query}
      onChangeText={onChangeText}
      {...props}
    />
  );
}
