import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import Router from './Router';
import 'react-native-gesture-handler';

export default function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}
