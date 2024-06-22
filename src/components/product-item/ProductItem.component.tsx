import {useNavigation, useTheme} from '@react-navigation/native';
import React, {useEffect, useRef} from 'react';
import {Animated, TouchableOpacity, View} from 'react-native';
import {Screens} from '../../router/Stack.types';
import FadeInAnimation from '../../utils/FadeInAnimation';
import ProductImage from '../product-image/ProductImage.component';
import ProductName from '../product-name/ProductName.component';
import ProductPrice from '../product-price/ProductPrice.component';
import styles from './ProductItem.styles';
import {ProductItemProps} from './ProductItem.types';

export default function ProductItem(
  props: ProductItemProps,
): React.JSX.Element {
  const {data, animationId, isEvenIndex, isEndRow, containerStyle} = props;
  const {colors} = useTheme();
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  function pressHandler() {
    navigation.navigate(Screens.Details, data);
  }

  useEffect(() => {
    FadeInAnimation(fadeAnim);
  }, [animationId]);

  return (
    <TouchableOpacity
      key={data?.id}
      activeOpacity={1}
      onPress={pressHandler}
      style={[
        styles.container,
        {
          borderColor: colors.border,
          borderRightWidth: isEvenIndex ? 1 : 0,
          marginBottom: isEndRow ? 10 : 0,
        },
        containerStyle,
      ]}>
      <Animated.View
        style={[
          styles.animatedView,
          {
            opacity: fadeAnim,
          },
        ]}>
        <ProductImage uri={data?.image} />
        <ProductName
          value={data?.name}
          numberOfLines={2}
          ellipsizeMode="tail"
        />
        <View style={styles.spacer} />
        <ProductPrice
          value={data?.price}
          discountedPrice={data?.discountedPrice}
          discountPercentage={data?.discountPercentage}
        />
      </Animated.View>
    </TouchableOpacity>
  );
}
