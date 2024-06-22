import {useTheme} from '@react-navigation/native';
import {Text} from 'react-native';
import styles from './ParagraphContext.styles';
import {ParagraphContextProps} from './ParagraphContext.types';

export default function ParagraphContext(
  props: ParagraphContextProps,
): React.JSX.Element {
  const {context, containerStyle} = props;
  const {colors, fonts} = useTheme();

  return (
    <Text
      style={[
        styles.container,
        {
          color: colors.text2,
        },
        fonts.regular,
        containerStyle,
      ]}>
      {context}
    </Text>
  );
}
