import {useMutation} from 'react-query';
import {createApi} from '../api/ApiFactory';
import {createAxios} from '../api/AxiosFactory';
import {useAppDispatch} from '../redux/Hooks';
import {
  setIsError,
  setIsLoading,
  setIsRefreshing,
} from '../redux/features/fetching/FetchingModesSlice';
import {setProducts} from '../redux/features/products/ProductsSlice';

export default function useProductsFetcher() {
  const dispatch = useAppDispatch();

  const getProductsMutation = useMutation({
    mutationFn: async () => {
      return createApi(createAxios())?.getProducts();
    },
    onSuccess: response => {
      dispatch(setProducts(response));
      dispatch(setIsLoading(false));
      dispatch(setIsRefreshing(false));
    },
    onError: () => {
      dispatch(setIsLoading(false));
      dispatch(setIsError(true));
      dispatch(setIsRefreshing(false));
    },
  });

  const fetchProducts = () => {
    getProductsMutation.mutate();
  };

  return fetchProducts;
}
