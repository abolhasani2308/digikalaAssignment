import {Dimensions, StyleSheet} from 'react-native';

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
    lineHeight: 30,
    marginTop: 12,
  },
  priceContainer: {
    marginTop: 24,
    alignSelf: 'flex-start',
  },
  priceValue: {
    fontSize: 17,
  },
  priceUnit: {
    fontSize: 12,
  },
  discountedPrice: {
    fontSize: 12,
  },
  discountPercentage: {
    fontSize: 14,
  },
  discountedUnit: {
    marginRight: 8,
  },
});
