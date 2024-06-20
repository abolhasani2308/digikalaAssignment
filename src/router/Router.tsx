import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Landing from '../screens/products/Products.component';
import {StackParamList, Screens} from './Stack.types';

const Stack = createNativeStackNavigator<StackParamList>();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Screens.Products}
      screenOptions={{
        gestureEnabled: false,
      }}>
      <Stack.Screen
        name={Screens.Products}
        component={Landing}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
