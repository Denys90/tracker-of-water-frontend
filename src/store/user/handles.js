export const handleFulfilled = (state) => {
  state.isLogined = false;
  state.isRefreshing = false;
};

export const handlePending = (state) => {
  state.isLoading = true;
  state.error = '';
  state.isRefreshing = true;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.isLogined = false;
  state.error = payload;
  state.isRefreshing = false;
};
