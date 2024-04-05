import { signUpThunk, loginThunk, logoutThunk } from '../thunk';

const extraActions = [signUpThunk, loginThunk, logoutThunk];

export const getActions = (type) => {
  return extraActions?.map((action) => action[type]);
};
