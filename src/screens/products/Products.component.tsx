import {FlashList} from '@shopify/flash-list';
import React, {useEffect} from 'react';
import {Dimensions, View} from 'react-native';
import BaseScreen from '../../components/base-screen/BaseScreen.component';
import ListEmpty from '../../components/list-empty/ListEmpty.component';
import ListError from '../../components/list-error/ListError.component';
import ListLoading from '../../components/list-loading/ListLoading.component';
import ProductItem from '../../components/product-item/ProductItem.component';
import SearchInput from '../../components/search-input/SearchInput.component';
import {useAppDispatch, useAppSelector} from '../../redux/Hooks';
import {setIsRefreshing} from '../../redux/features/fetching/FetchingModesSlice';
import useProductsFetcher from '../../utils/ProductsFetcher';
import styles from './Products.styles';

const windowWidth = Dimensions.get('window').width;

export default function Products(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.products.value);
  const query = useAppSelector(state => state.query.value);
  const isLoading = useAppSelector(state => state.fetchingModes.isLoading);
  const isError = useAppSelector(state => state.fetchingModes.isError);
  const isRefreshing = useAppSelector(
    state => state.fetchingModes.isRefreshing,
  );
  const fetchProducts = useProductsFetcher();

  useEffect(fetchProducts, []);

  function renderItem({item, index}) {
    return (
      <ProductItem
        data={item}
        animationId={`${item?.id}-${index}`}
        isEvenIndex={index % 2 === 0}
        isEndRow={
          products?.length % 2 === 0
            ? index === products?.length - 1 || index === products?.length - 2
            : index === products?.length - 1
        }
      />
    );
  }

  function refreshHandler() {
    dispatch(setIsRefreshing(true));
    fetchProducts();
  }

  function renderDetector() {
    switch (isLoading) {
      case true:
        return <ListLoading />;

      default:
        return (
          <View style={styles.listWrapper}>
            <FlashList
              data={
                !!query
                  ? products?.filter(item => item?.name?.includes(query))
                  : products
              }
              renderItem={renderItem}
              keyExtractor={item => item?.id}
              estimatedItemSize={windowWidth / 2 - 32 + 200}
              numColumns={2}
              ListEmptyComponent={isError ? <ListError /> : <ListEmpty />}
              ListHeaderComponent={<SearchInput />}
              onRefresh={refreshHandler}
              refreshing={isRefreshing}
              showsVerticalScrollIndicator={false}
            />
          </View>
        );
    }
  }

  return <BaseScreen>{renderDetector()}</BaseScreen>;
}
