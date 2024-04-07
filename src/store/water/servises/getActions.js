import {
  createWaterThunk,
  addDailyNormaThunk,
  deleteTodoThunk,
  patchWatersThunk,
} from '../thunk.js';

const extraActions = [
  createWaterThunk,
  addDailyNormaThunk,
  deleteTodoThunk,
  patchWatersThunk,
];

export const getActions = (type) => extraActions.map((action) => action[type]);
