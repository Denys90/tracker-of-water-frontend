import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getAllWatersThunk,
  addWatersThunk,
  deleteWatersThunk,
  patchWatersThunk,
} from './thunk';
import { handleFulfilled, handlePending, handleReject } from './handles';

import { getActions } from './servises/getActions';

const initialState = {
  waters: [],
  isLoading: false,
  error: null,
};

const waterSlice = createSlice({
  name: 'waters',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllWatersThunk.fulfilled, (state, action) => {
        state.waters = action.payload;
      })
      .addCase(addWatersThunk.fulfilled, (state, action) => {
        state.waters = [...state.waters, action.payload];
      })
      .addCase(deleteWatersThunk.fulfilled, (state, action) => {
        state.waters = state.waters.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(patchWatersThunk.fulfilled, (state, action) => {
        const index = state.waters.findIndex(
          (contact) => contact.id === action.payload.id
        );
        if (index !== -1) {
          state.waters[index] = action.payload;
        }
      })
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('rejected')), handleReject);
  },
});

export const waterReducer = waterSlice.reducer;
