import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {I18nextProvider} from 'react-i18next';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import i18n from '../i18n/I18n';
import {store} from '../redux/Store';
import AppTheme from '../theme';
import Router from './Router';

const queryClient = new QueryClient();

export default function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <I18nextProvider i18n={i18n}>
          <NavigationContainer theme={AppTheme}>
            <Router />
          </NavigationContainer>
        </I18nextProvider>
      </QueryClientProvider>
    </Provider>
  );
}
