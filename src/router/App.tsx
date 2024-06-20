import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import 'react-native-gesture-handler';
import colors from '../theme/Colors.json';
import fonts from '../theme/Fonts.json';
import Router from './Router';

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...colors,
  },
  fonts: {
    ...fonts,
  },
};

export default function App(): React.JSX.Element {
  return (
    <NavigationContainer theme={AppTheme}>
      <Router />
    </NavigationContainer>
  );
}
