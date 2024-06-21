import {useTheme} from '@react-navigation/native';
import {View} from 'react-native';
import styles from './Divider.styles';
import {DividerProps} from './Divider.types';

export default function Divider(props: DividerProps): React.JSX.Element {
  const {containerStyle} = props;
  const {colors} = useTheme();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: colors.border},
        containerStyle,
      ]}
    />
  );
}
