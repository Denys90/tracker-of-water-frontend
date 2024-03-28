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
  currentUserThunk,
  loginThunk,
  logoutThunk,
  signUpThunk,
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

  const fetchCurrentUser = useCallback(
    () => dispatch(currentUserThunk()),
    [dispatch]
  );

  return {
    user,
    isAuthenticated,
    isRefreshingUser,
    isAuthError,
    isAuth,
    signUp,
    signIn,
    signOut,
    fetchCurrentUser,
  };
};
