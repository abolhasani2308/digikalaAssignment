import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {I18nextProvider} from 'react-i18next';
import 'react-native-gesture-handler';
import i18n from '../i18n/I18n';
import AppTheme from '../theme';
import Router from './Router';
import {Provider} from 'react-redux';
import {store} from '../redux/Store';

export default function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <NavigationContainer theme={AppTheme}>
          <Router />
        </NavigationContainer>
      </I18nextProvider>
    </Provider>
  );
}
