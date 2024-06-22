import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import NumberFixer from '../../utils/NumberFixer';
import styles from './DiscountedPrice.styles';
import {DiscountedPriceProps} from './DiscountedPrice.types';

export default function DiscountedPrice(
  props: DiscountedPriceProps,
): React.JSX.Element {
  const {value, containerStyle, valueStyle, unitStyle} = props;
  const {colors, fonts} = useTheme();
  const {t} = useTranslation();

  return (
    <View
      style={[
        {
          flexDirection: 'row',
        },
        containerStyle,
      ]}>
      <Text style={[styles.unit, fonts.regular, unitStyle]}>{t('toman')}</Text>
      <Text
        style={[
          styles.container,
          {
            color: colors.text5,
          },
          fonts.regular,
          valueStyle,
        ]}>
        {NumberFixer(value)}
      </Text>
    </View>
  );
}
