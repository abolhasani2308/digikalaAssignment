import {useTheme} from '@react-navigation/native';
import {Text} from 'react-native';
import styles from './ParagraphTitle.styles';
import {ParagraphTitleProps} from './ParagraphTitle.types';

export default function ParagraphTitle(
  props: ParagraphTitleProps,
): React.JSX.Element {
  const {title, containerStyle} = props;
  const {colors, fonts} = useTheme();

  return (
    <Text
      style={[
        styles.container,
        {
          color: "#000000",
        },
        fonts.bold,
        containerStyle,
      ]}>
      {title}
    </Text>
  );
}
