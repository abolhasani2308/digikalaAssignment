import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    width: windowWidth / 2 - 32,
    height: windowWidth / 2 - 32,
    borderRadius: 12,
  },
});
