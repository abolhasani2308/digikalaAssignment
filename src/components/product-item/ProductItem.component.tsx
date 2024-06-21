import {useNavigation, useTheme} from '@react-navigation/native';
import {TouchableOpacity, View} from 'react-native';
import {Screens} from '../../router/Stack.types';
import ProductImage from '../product-image/ProductImage.component';
import ProductName from '../product-name/ProductName.component';
import ProductPrice from '../product-price/ProductPrice.component';
import styles from './ProductItem.styles';
import {ProductItemProps} from './ProductItem.types';

export default function ProductItem(
  props: ProductItemProps,
): React.JSX.Element {
  const {
    id,
    name,
    image,
    price,
    description,
    isEvenIndex,
    isEndRow,
    containerStyle,
  } = props;
  const {colors} = useTheme();
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        navigation.navigate(Screens.Details, {
          id: id,
          name: name,
          image: image,
          price: price,
          description: description,
        });
      }}
      style={[
        styles.container,
        {
          borderColor: colors.border,
          borderBottomWidth: isEndRow ? 0 : 1,
          borderRightWidth: isEvenIndex ? 1 : 0,
        },
        containerStyle,
      ]}>
      <ProductImage uri={image} />
      <ProductName value={name} numberOfLines={2} ellipsizeMode="tail" />
      <View style={styles.spacer} />
      <ProductPrice value={price} />
    </TouchableOpacity>
  );
}
