import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../../Store';

type FetchingState = {
  isLoading: boolean;
  isError: boolean;
  isRefreshing: boolean;
};

const initialState: FetchingState = {
  isLoading: true,
  isError: false,
  isRefreshing: false,
};

export const fetchingSlice = createSlice({
  name: 'fetching',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setIsError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
    },
    setIsRefreshing: (state, action: PayloadAction<boolean>) => {
      state.isRefreshing = action.payload;
    },
  },
});

export const {setIsLoading, setIsError, setIsRefreshing} =
  fetchingSlice.actions;

export const selectIsLoading = (state: RootState) => state.fetching.isLoading;

export const selectIsError = (state: RootState) => state.fetching.isError;

export const selectIsRefreshing = (state: RootState) =>
  state.fetching.isRefreshing;

export default fetchingSlice.reducer;
