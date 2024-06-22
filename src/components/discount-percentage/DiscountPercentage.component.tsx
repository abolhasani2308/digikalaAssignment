import {useTheme} from '@react-navigation/native';
import {Text, View} from 'react-native';
import styles from './DiscountPercentage.styles';
import {DiscountPercentageProps} from './DiscountPercentage.types';

export default function DiscountPercentage(
  props: DiscountPercentageProps,
): React.JSX.Element {
  const {value, containerStyle} = props;
  const {colors, fonts} = useTheme();

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: colors.primary},
        containerStyle,
      ]}>
      <Text
        style={[
          styles.value,
          {
            color: '#ffffff',
          },
          fonts.bold,
        ]}>
        {value}%
      </Text>
    </View>
  );
}
