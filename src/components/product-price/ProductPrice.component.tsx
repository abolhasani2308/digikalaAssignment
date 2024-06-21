import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {Text} from 'react-native';
import NumberFixer from '../../utils/NumberFixer';
import styles from './ProductPrice.styles';
import {ProductPriceProps} from './ProductPrice.types';

export default function ProductPrice(
  props: ProductPriceProps,
): React.JSX.Element {
  const {value, containerStyle} = props;
  const {fonts} = useTheme();
  const {t} = useTranslation();

  return (
    <Text
      style={[
        styles.container,
        fonts.bold,
        {color: '#0c0c0c'},
        containerStyle,
      ]}>
      {NumberFixer(value)}{' '}
      <Text
        style={[
          {
            fontSize: 10,
          },
          fonts.bold,
        ]}>
        {t('toman')}
      </Text>
    </Text>
  );
}
