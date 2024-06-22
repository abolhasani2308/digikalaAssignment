import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../../Store';

type Details = {
  id: string;
  name: string;
  image: string;
  price: number;
  discountedPrice: number;
  discountPercentage: number;
  description: string;
};

type DetailsState = {
  value: Details;
};

const initialState: DetailsState = {
  value: {
    id: '',
    name: '',
    image: '',
    price: 0,
    discountedPrice: 0,
    discountPercentage: 0,
    description: '',
  },
};

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setDetails: (state, action: PayloadAction<Details>) => {
      state.value = action.payload;
    },
  },
});

export const {setDetails} = detailsSlice.actions;

export const selectDetails = (state: RootState) => state.details.value;

export default detailsSlice.reducer;
