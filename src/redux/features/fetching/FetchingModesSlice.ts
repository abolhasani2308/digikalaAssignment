import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../../Store';

type FetchingModesState = {
  isLoading: boolean;
  isError: boolean;
  isRefreshing: boolean;
};

const initialState: FetchingModesState = {
  isLoading: true,
  isError: false,
  isRefreshing: false,
};

export const fetchingModesSlice = createSlice({
  name: 'fetchingModes',
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
  fetchingModesSlice.actions;

export const selectIsLoading = (state: RootState) =>
  state.fetchingModes.isLoading;

export const selectIsError = (state: RootState) => state.fetchingModes.isError;

export const selectIsRefreshing = (state: RootState) =>
  state.fetchingModes.isRefreshing;

export default fetchingModesSlice.reducer;
