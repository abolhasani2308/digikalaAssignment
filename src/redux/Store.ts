import {configureStore} from '@reduxjs/toolkit';
import fetchingReducer from './features/fetching/FetchingSlice';
import productsReducer from './features/products/ProductsSlice';
import queryReducer from './features/query/QuerySlice';
import detailsReducer from './features/details/DetailsSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    details: detailsReducer,
    query: queryReducer,
    fetching: fetchingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
