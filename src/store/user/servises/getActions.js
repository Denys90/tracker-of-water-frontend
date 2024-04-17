import {
  signUpThunk,
  loginThunk,
  logoutThunk,
  deleteUserThunk,
} from '../thunk';

const extraActions = [signUpThunk, loginThunk, logoutThunk, deleteUserThunk];

export const getActions = (type) => {
  return extraActions?.map((action) => action[type]);
};
