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
import useDetailsFetcher from '../../utils/DetailsFetcher';
import {useAppDispatch, useAppSelector} from '../../redux/Hooks';
import {setDetails} from '../../redux/features/details/DetailsSlice';

export default function Details(): React.JSX.Element {
  const {colors, fonts} = useTheme();
  const dispatch = useAppDispatch();
  const route = useRoute<RouteProp<RootStackParamList, Screens.Details>>();
  const data = route?.params;
  const details = useAppSelector(state => state.details.value);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const animationDuration: number = 400;

  const fetchDetails = useDetailsFetcher();

  useEffect(() => {
    fetchDetails(data?.id);
    return () => {
      dispatch(
        setDetails({
          id: '',
          name: '',
          image: '',
          price: 0,
          discountedPrice: 0,
          discountPercentage: 0,
          description: '',
        }),
      );
    };
  }, []);

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
          <ProductImage containerStyle={styles.image} uri={details?.image} />
        </Animated.View>
        <ReanimatedComponents.View
          entering={Reanimated.FadeInRight.duration(animationDuration)}>
          <ProductName
            value={details?.name}
            containerStyle={[styles.name, fonts.medium, {color: colors.text2}]}
          />
        </ReanimatedComponents.View>
        <ReanimatedComponents.View
          entering={Reanimated.FadeInLeft.duration(animationDuration)}>
          <ProductPrice
            value={details?.price}
            discountedPrice={details?.discountedPrice}
            discountPercentage={details?.discountPercentage}
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
          <ProductDescription context={details?.description} />
        </ReanimatedComponents.View>
      </ScrollView>
    </BaseScreen>
  );
}
