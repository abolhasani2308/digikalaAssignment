import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import NumberFixer from '../../utils/NumberFixer';
import DiscountPercentage from '../discount-percentage/DiscountPercentage.component';
import DiscountedPrice from '../discounted-price/DiscountedPrice.component';
import styles from './ProductPrice.styles';
import {ProductPriceProps} from './ProductPrice.types';

export default function ProductPrice(
  props: ProductPriceProps,
): React.JSX.Element {
  const {
    value,
    discountedPrice,
    discountPercentage,
    containerStyle,
    valueStyle,
    unitStyle,
    discountedPriceStyle,
    discountPercentageStyle,
    discountedPriceUnitStyle,
  } = props;
  const {fonts} = useTheme();
  const {t} = useTranslation();

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.priceSection}>
        <Text
          style={[styles.value, fonts.medium, {color: '#0c0c0c'}, valueStyle]}>
          {NumberFixer(value)}{' '}
          <Text style={[styles.unit, fonts.regular, unitStyle]}>
            {t('toman')}
          </Text>
        </Text>
        <DiscountedPrice
          value={discountedPrice}
          valueStyle={discountedPriceStyle}
          unitStyle={discountedPriceUnitStyle}
        />
      </View>
      <DiscountPercentage
        value={discountPercentage}
        valueStyle={discountPercentageStyle}
      />
    </View>
  );
}
