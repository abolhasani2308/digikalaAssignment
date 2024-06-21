import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useTranslation} from 'react-i18next';
import BaseHeader from '../components/header/base-header/BaseHeader.component';
import Landing from '../screens/products/Products.component';
import {Screens, StackParamList} from './Stack.types';
import Details from '../screens/details/Details.component';
import HeaderWithBack from '../components/header/header-with-back/HeaderWithBack.component';

const Stack = createNativeStackNavigator<StackParamList>();

const AppNavigation = () => {
  const {t} = useTranslation();
 
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
          header: () => <BaseHeader title={t('availableProducts')} />,
        }}
      />
      <Stack.Screen
        name={Screens.Details}
        component={Details}
        options={{
          header: () => <HeaderWithBack title={t('productDetails')} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
