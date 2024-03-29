import {
  getAllWatersThunk,
  addWatersThunk,
  deleteWatersThunk,
  patchWatersThunk,
} from '../thunk.js';

const extraActions = [
  getAllWatersThunk,
  addWatersThunk,
  deleteWatersThunk,
  patchWatersThunk,
];

export const getActions = (type) => extraActions.map((action) => action[type]);
