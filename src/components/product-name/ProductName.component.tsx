import {useTheme} from '@react-navigation/native';
import {Text} from 'react-native';
import styles from './ProductName.styles';
import {ProductNameProps} from './ProductName.types';

export default function ProductName(
  props: ProductNameProps,
): React.JSX.Element {
  const {value, containerStyle} = props;
  const {fonts} = useTheme();
  return (
    <Text
      style={[
        styles.container,
        fonts.medium,
        {color: '#43474e'},
        containerStyle,
      ]}
      {...props}>
      {value}
    </Text>
  );
}
