import {
  signUpThunk,
  loginThunk,
  currentUserThunk,
  logoutThunk,
} from '../user/thunk';

const extraActions = [signUpThunk, loginThunk, currentUserThunk, logoutThunk];

export const getActions = (type) => {
  return extraActions?.map((action) => action[type]);
};
