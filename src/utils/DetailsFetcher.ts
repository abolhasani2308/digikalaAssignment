//@ts-nocheck
import {useMutation} from 'react-query';
import {createApi} from '../api/ApiFactory';
import {createAxios} from '../api/AxiosFactory';
import {useAppDispatch} from '../redux/Hooks';
import {setDetails} from '../redux/features/details/DetailsSlice';
import {
  setIsError,
  setIsLoading,
} from '../redux/features/fetching/FetchingSlice';

type Details = {
  id: string;
  name: string;
  image: string;
  price: number;
  discountedPrice: number;
  discountPercentage: number;
  description: string;
};

export default function useDetailsFetcher() {
  const dispatch = useAppDispatch();

  const getDetailsMutation = useMutation({
    mutationFn: async (id: string) => {
      return createApi(createAxios())?.getDetails(id);
    },
    onSuccess: (response: Details) => {
      dispatch(setDetails(response));
      dispatch(setIsLoading(false));
      dispatch(setIsError(false));
    },
    onError: () => {
      dispatch(setIsLoading(false));
      dispatch(setIsError(true));
    },
  });

  const fetchDetails = (id: string) => {
    getDetailsMutation.mutate(id);
  };

  return fetchDetails;
}
