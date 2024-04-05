export const selectToken = (state) => state.users.token;
export const selectProfile = (state) => state.users.profile;
export const selectAvatar = (state) => state.users.avatarURL;
export const selectIsLoginedIn = (state) => state.users.isLogined;
export const selectIsRefreshing = (state) => state.users.isRefreshing;
export const selectHasError = (state) => state.users.hasError;
