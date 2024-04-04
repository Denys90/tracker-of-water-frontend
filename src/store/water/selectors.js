import { createSelector } from '@reduxjs/toolkit';

export const selectDailyNorm = (state) => state.waters.dailyNorm;
export const selectReps = (state) => state.waters.reps;
export const selectFilter = (state) => state.filter;

export const selectWater = createSelector(
  [selectDailyNorm, selectFilter],
  (dailyNorms, filter) => {
    return dailyNorms.filter((dailyNorm) =>
      dailyNorm.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
