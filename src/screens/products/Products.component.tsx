import {FlashList} from '@shopify/flash-list';
import React, {useEffect} from 'react';
import {Dimensions, View} from 'react-native';
import BaseScreen from '../../components/base-screen/BaseScreen.component';
import Error from '../../components/error/Error.component';
import ListEmpty from '../../components/list-empty/ListEmpty.component';
import ProductItem from '../../components/product-item/ProductItem.component';
import SearchInput from '../../components/search-input/SearchInput.component';
import {useAppDispatch, useAppSelector} from '../../redux/Hooks';
import {setIsRefreshing} from '../../redux/features/fetching/FetchingSlice';
import useProductsFetcher from '../../utils/ProductsFetcher';
import styles from './Products.styles';
import {Product} from './Products.types';

const windowWidth = Dimensions.get('window').width;

export default function Products(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.products.value);
  const query = useAppSelector(state => state.query.value);
  const isError = useAppSelector(state => state.fetching.isError);
  const isRefreshing = useAppSelector(state => state.fetching.isRefreshing);
  const fetchProducts = useProductsFetcher();

  useEffect(fetchProducts, []);

  function renderItem({item, index}: {item: Product; index: number}) {
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

  return (
    <BaseScreen>
      <View style={styles.listWrapper}>
        <FlashList
          /**
           * It is advisable to conduct searches on the server side. However, due to the limitations of the jsonplaceholder service
           * in terms of search capabilities, the search operation has been carried out on the client side.
           * This is not considered a best practice, and it would have been more effective to create a separate endpoint for searches and
           * send a query to the server using a query string. The server would then perform the search operation on the product names and
           * send the results to the client for updating.
           */
          data={
            !!query
              ? products?.filter(item =>
                  item?.name?.toLowerCase()?.includes(query?.toLowerCase()),
                )
              : products
          }
          renderItem={renderItem}
          keyExtractor={item => item?.id}
          estimatedItemSize={windowWidth / 2 - 32 + 200}
          numColumns={2}
          ListEmptyComponent={isError ? <Error /> : <ListEmpty />}
          ListHeaderComponent={<SearchInput />}
          onRefresh={refreshHandler}
          refreshing={isRefreshing}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </BaseScreen>
  );
}
