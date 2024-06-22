import {Dimensions, StyleSheet} from 'react-native';

const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    height: windowHeight - 176,
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    height: 200,
    width: 200,
  },
});
