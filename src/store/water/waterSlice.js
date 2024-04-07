import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  createWaterThunk,
  getMonthThunk,
  addDailyNormaThunk,
  deleteTodoThunk,
  patchWatersThunk,
  addOneTodoThunk,
} from './thunk';
import { handleFulfilled, handlePending, handleReject } from './handles';

import { getActions } from './servises/getActions';

const initialState = {
  dailyNorm: 2000,
  reps: [],
  month: [],
  percent: 0,
  isLoading: false,
  error: null,
};

const waterSlice = createSlice({
  name: 'waters',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createWaterThunk.fulfilled, (state, action) => {
        state.dailyNorm = action.payload.daily_limit;
        state.reps = action.payload.water_entries;
        state.percent = action.payload.percent;
      })
      .addCase(getMonthThunk.fulfilled, (state, action) => {
        state.month = action.payload;
      })
      .addCase(addDailyNormaThunk.fulfilled, (state, action) => {
        state.dailyNorm = action.payload.daily_limit;
      })
      .addCase(addOneTodoThunk.fulfilled, (state, action) => {
        state.reps.push(action.payload);
      })
      .addCase(deleteTodoThunk.fulfilled, (state, action) => {
        state.reps = state.reps.filter((rep) => rep.id !== action.payload.id);
      })
      .addCase(patchWatersThunk.fulfilled, (state, action) => {
        const index = state.todos.findIndex(
          (todo) => todo.id === action.payload.id
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
