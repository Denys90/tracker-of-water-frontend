import {
  addWatersThunk,
  addDailyNormaThunk,
  deleteTodoThunk,
  patchWatersThunk,
} from '../thunk.js';

const extraActions = [
  addWatersThunk,
  addDailyNormaThunk,
  deleteTodoThunk,
  patchWatersThunk,
];

export const getActions = (type) => extraActions.map((action) => action[type]);
