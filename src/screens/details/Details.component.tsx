import {RouteProp, useRoute, useTheme} from '@react-navigation/native';
import React, {useEffect, useRef} from 'react';
import {Animated, ScrollView} from 'react-native';
import ReanimatedComponents, * as Reanimated from 'react-native-reanimated';
import BaseScreen from '../../components/base-screen/BaseScreen.component';
import Divider from '../../components/divider/Divider.component';
import ProductDescription from '../../components/product-description/ProductDescription.component';
import ProductImage from '../../components/product-image/ProductImage.component';
import ProductName from '../../components/product-name/ProductName.component';
import ProductPrice from '../../components/product-price/ProductPrice.component';
import {Screens, RootStackParamList} from '../../router/Stack.types';
import FadeInAnimation from '../../utils/FadeInAnimation';
import styles from './Details.styles';

export default function Details(): React.JSX.Element {
  const {colors, fonts} = useTheme();
  const route = useRoute<RouteProp<RootStackParamList, Screens.Details>>();
  const data = route?.params;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const animationDuration: number = 400;

  useEffect(() => {
    FadeInAnimation(fadeAnim);
  }, []);

  return (
    <BaseScreen>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Animated.View
          style={{
            opacity: fadeAnim,
          }}>
          <ProductImage containerStyle={styles.image} uri={data?.image} />
        </Animated.View>
        <ReanimatedComponents.View
          entering={Reanimated.FadeInRight.duration(animationDuration)}>
          <ProductName
            value={data?.name}
            containerStyle={[styles.name, fonts.medium, {color: colors.text2}]}
          />
        </ReanimatedComponents.View>
        <ReanimatedComponents.View
          entering={Reanimated.FadeInLeft.duration(animationDuration)}>
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
        </ReanimatedComponents.View>
        <Divider />
        <ReanimatedComponents.View
          entering={Reanimated.FadeInDown.duration(animationDuration)}>
          <ProductDescription context={data?.description} />
        </ReanimatedComponents.View>
      </ScrollView>
    </BaseScreen>
  );
}
