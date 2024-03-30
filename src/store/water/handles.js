export const handlePending = (state) => {
  state.isLoading = true;
};

export const handleReject = (state, action) => {
  state.error = action.payload;
};

export const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
};
