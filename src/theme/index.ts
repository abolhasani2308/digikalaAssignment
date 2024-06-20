import colors from '../theme/Colors.json';
import fonts from '../theme/Fonts.json';
import {DefaultTheme} from '@react-navigation/native';

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...colors,
  },
  fonts: {
    ...fonts,
  },
};

export default AppTheme;
