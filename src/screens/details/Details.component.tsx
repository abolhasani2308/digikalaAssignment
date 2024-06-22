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
import BaseScreen from '../../components/base-screen/BaseScreen.component';

export default function Details() {
  const {fonts} = useTheme();
  const route = useRoute<RouteProp<StackParamList, Screens.Details>>();
  const data = route?.params;

  return (
    <BaseScreen>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <ProductImage containerStyle={styles.image} uri={data?.image} />
        <ProductName
          value={data?.name}
          containerStyle={[styles.name, fonts.medium, {color: '#222933'}]}
        />
        <ProductPrice
          value={data?.price}
          discountedPrice={data?.discountedPrice}
          discountPercentage={data?.discountPercentage}
          containerStyle={styles.priceContainer}
          valueStyle={styles.priceValue}
          unitStyle={styles.priceUnit}
          discountedPriceStyle={styles.discountedPrice}
          discountPercentageStyle={styles.discountPercentage}
          discountedPriceUnitStyle={styles.discountedUnit}
        />
        <Divider />
        <ProductDescription context={data?.description} />
      </ScrollView>
    </BaseScreen>
  );
}
