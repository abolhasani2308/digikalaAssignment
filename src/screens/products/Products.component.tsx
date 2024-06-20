import {useTheme} from '@react-navigation/native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import BaseScreen from '../../components/base-screen/BaseScreen.component';
import SearchInput from '../../components/search-input/SearchInput.component';

export default function Products(): React.JSX.Element {
  const {colors, fonts} = useTheme();
  const {t} = useTranslation();

  return (
    <BaseScreen>
      <SearchInput />
    </BaseScreen>
  );
}
