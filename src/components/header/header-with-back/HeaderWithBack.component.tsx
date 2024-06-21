import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import SVG from '../../../assets/images/index';
import BaseHeader from '../base-header/BaseHeader.component';
import styles from './HeaderWithBack.styles';
import {HeaderWithBackProps} from './HeaderWithBack.types';

export default function HeaderWithBack(
  props: HeaderWithBackProps,
): React.JSX.Element {
  const navigation = useNavigation();
  return (
    <BaseHeader
      titleStyle={{
        marginLeft: 56,
      }}
      {...props}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.goBack();
        }}>
        <SVG.arrowRight height={24} width={24} />
      </TouchableOpacity>
    </BaseHeader>
  );
}
