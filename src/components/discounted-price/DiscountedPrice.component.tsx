import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import NumberFixer from '../../utils/NumberFixer';
import styles from './DiscountedPrice.styles';
import {DiscountedPriceProps} from './DiscountedPrice.types';

export default function DiscountedPrice(
  props: DiscountedPriceProps,
): React.JSX.Element {
  const {value, containerStyle} = props;
  const {colors, fonts} = useTheme();
  const {t} = useTranslation();

  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <Text style={[styles.unit, fonts.regular]}>{t('toman')}</Text>
      <Text
        style={[
          styles.container,
          {
            color: '#a2a3a8',
          },
          fonts.regular,
          containerStyle,
        ]}>
        {NumberFixer(value)}
      </Text>
    </View>
  );
}
