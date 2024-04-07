export const handleFulfilled = (state) => {
  state.isLogined = true;
};

export const handlePending = (state) => {
  state.isLoading = true;
  state.error = '';
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.isLogined = false;
  state.error = payload;
};
