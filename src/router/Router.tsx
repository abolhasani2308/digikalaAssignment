import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useTranslation} from 'react-i18next';
import BaseHeader from '../components/base-header/BaseHeader.component';
import Products from '../screens/products/Products.component';
import {Screens, RootStackParamList} from './Stack.types';
import Details from '../screens/details/Details.component';
import HeaderWithBack from '../components/header-with-back/HeaderWithBack.component';

const Stack = createNativeStackNavigator<RootStackParamList>();

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
        component={Products}
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
