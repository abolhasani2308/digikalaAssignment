import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../../Store';

type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  discountedPrice: number;
  discountPercentage: number;
  description: string;
};

type ProductState = {
  value: Product[];
};

const initialState: ProductState = {
  value: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.value = action.payload;
    },
  },
});

export const {setProducts} = productsSlice.actions;

export const selectProducts = (state: RootState) => state.products.value;

export default productsSlice.reducer;
