import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Landing from '../screens/landing/Landing';
import {StackParamList, Screens} from './Stack.types';

const Stack = createNativeStackNavigator<StackParamList>();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Screens.Landing}
      screenOptions={{
        gestureEnabled: false,
      }}>
      <Stack.Screen
        name={Screens.Landing}
        component={Landing}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
