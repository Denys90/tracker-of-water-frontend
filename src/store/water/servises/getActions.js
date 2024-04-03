import {
  getWatersThunk,
  addDailyNormaThunk,
  deleteTodoThunk,
  patchWatersThunk,
} from '../thunk.js';

const extraActions = [
  getWatersThunk,
  addDailyNormaThunk,
  deleteTodoThunk,
  patchWatersThunk,
];

export const getActions = (type) => extraActions.map((action) => action[type]);
