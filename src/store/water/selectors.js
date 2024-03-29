import { createSelector } from '@reduxjs/toolkit';

export const selectWater = (state) => state.waters.waters;
export const selectFilter = (state) => state.filter;

export const selectUseWater = createSelector(
  [selectWater, selectFilter],

  (waters, filter) => {
    return waters.filter((water) =>
      water.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
