import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoginedIn,
  selectProfile,
  selectHasError,
  selectIsRefreshing,
  selectToken,
} from '../store/user/selectors';
import {
  loginThunk,
  logoutThunk,
  signUpThunk,
  getCurrentThunk,
  getUserInfoThunk,
  patchUserInfoThunk,
  patchUserAvatarThunk,
  verifyThunk,
  deleteUserThunk,
} from '../store/user/thunk';

export const useUsers = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector(selectToken);
  const user = useSelector(selectProfile);

  const isAuthenticated = useSelector(selectIsLoginedIn);
  const isRefreshingUser = useSelector(selectIsRefreshing);
  const isAuthError = useSelector(selectHasError);

  const signUp = useCallback(
    (credentials) => dispatch(signUpThunk(credentials)),
    [dispatch]
  );

  const signIn = useCallback(
    (credentials) => dispatch(loginThunk(credentials)),
    [dispatch]
  );

  const signOut = useCallback(() => dispatch(logoutThunk()), [dispatch]);
  const deleteUser = useCallback(
    (credentials) => dispatch(deleteUserThunk(credentials)),
    [dispatch]
  );
  // User information

  const userInfo = useCallback(() => dispatch(getUserInfoThunk()), [dispatch]);

  const newUserInfo = useCallback(
    (credentials) => dispatch(patchUserInfoThunk(credentials)),
    [dispatch]
  );
  const newUserAvatar = useCallback(
    (credentials) => dispatch(patchUserAvatarThunk(credentials)),
    [dispatch]
  );
  const getCurrent = useCallback(() => dispatch(getCurrentThunk()), [dispatch]);
  const getVerify = useCallback(
    (data) => dispatch(verifyThunk(data)),
    [dispatch]
  );

  return {
    isAuthenticated,
    isRefreshingUser,
    isAuthError,
    isAuth,
    user,

    signUp,
    signIn,
    signOut,
    userInfo,
    getCurrent,
    newUserInfo,
    newUserAvatar,
    getVerify,
    deleteUser,
  };
};

// export default useUsers;
