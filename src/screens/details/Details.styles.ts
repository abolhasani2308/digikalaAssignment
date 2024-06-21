import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  image: {
    height: windowWidth,
    width: windowWidth,
  },
  name: {
    fontSize: 18,
    marginHorizontal: 20,
    lineHeight: 36,
    marginTop: 12,
  },
  price: {
    fontSize: 20,
    marginTop: 24,
  },
});
