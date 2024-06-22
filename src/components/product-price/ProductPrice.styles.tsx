import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  priceSection: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  value: {fontSize: 15, flexShrink: 1},
  unit: {
    fontSize: 10,
  },
});
