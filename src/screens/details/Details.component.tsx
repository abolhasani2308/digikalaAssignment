import {RouteProp, useRoute, useTheme} from '@react-navigation/native';
import React from 'react';
import {ScrollView} from 'react-native';
import Divider from '../../components/divider/Divider.component';
import ProductDescription from '../../components/product-description/ProductDescription.component';
import ProductImage from '../../components/product-image/ProductImage.component';
import ProductName from '../../components/product-name/ProductName.component';
import ProductPrice from '../../components/product-price/ProductPrice.component';
import {Screens, StackParamList} from '../../router/Stack.types';
import styles from './Details.styles';

export default function Details() {
  const {fonts} = useTheme();
  const route = useRoute<RouteProp<StackParamList, Screens.Details>>();
  const data = route?.params;

  return (
    <ScrollView style={styles.container}>
      <ProductImage containerStyle={styles.image} uri={data?.image} />
      <ProductName
        value={data?.name}
        containerStyle={[styles.name, fonts.medium]}
      />
      <ProductPrice value={data?.price} containerStyle={styles.price} />
      <Divider />
      <ProductDescription context={data?.description} />
    </ScrollView>
  );
}
