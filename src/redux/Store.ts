import {configureStore} from '@reduxjs/toolkit';
import productsReducer from './features/products/ProductsSlice';
import queryReducer from './features/query/QuerySlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    query: queryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
