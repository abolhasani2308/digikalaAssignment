//@ts-nocheck
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

type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  discountedPrice: number;
  discountPercentage: number;
  description: string;
};

type ProductsList = Product[];

export default function useProductsFetcher() {
  const dispatch = useAppDispatch();

  const getProductsMutation = useMutation({
    mutationFn: async () => {
      return createApi(createAxios())?.getProducts();
    },
    onSuccess: (response: ProductsList) => {
      dispatch(setProducts(response));
      dispatch(setIsLoading(false));
      dispatch(setIsRefreshing(false));
      dispatch(setIsError(false));
    },
    onError: () => {
      dispatch(setProducts([]));
      dispatch(setIsLoading(false));
      dispatch(setIsRefreshing(false));
      dispatch(setIsError(true));
    },
  });

  const fetchProducts = () => {
    getProductsMutation.mutate();
  };

  return fetchProducts;
}
