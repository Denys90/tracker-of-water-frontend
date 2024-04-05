import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoginedIn,
  selectProfile,
  selectHasError,
  selectIsRefreshing,
  selectToken,
  selectAvatar,
} from '../store/user/selectors';
import { loginThunk, logoutThunk, signUpThunk } from '../store/user/thunk';

const useUsers = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector(selectToken);
  const user = useSelector(selectProfile);
  const avatar = useSelector(selectAvatar);
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

  return {
    user,
    isAuthenticated,
    isRefreshingUser,
    isAuthError,
    isAuth,
    avatar,
    signUp,
    signIn,
    signOut,
  };
};

export default useUsers;
