import {Dimensions, StyleSheet} from 'react-native';

const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    height: windowHeight - 176,
  },
  animation: {
    height: 200,
    width: 200,
    marginBottom: 0,
  },
});
