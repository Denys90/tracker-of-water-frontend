import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getWatersThunk,
  addDailyNormaThunk,
  deleteTodoThunk,
  patchWatersThunk,
} from '../store/water/thunk';

import {
  selectDailyNorm,
  selectFilter,
  selectReps,
} from '../store/water/selectors';

const useWater = () => {
  const dispatch = useDispatch();

  const dailyNorm = useSelector(selectDailyNorm);
  const reps = useSelector(selectReps);
  const filter = useSelector(selectFilter);

  const getWaters = useCallback(
    (credentials) => dispatch(getWatersThunk(credentials)),
    [dispatch]
  );

  const addDailyNorma = useCallback(
    (credentials) => dispatch(addDailyNormaThunk(credentials)),
    [dispatch]
  );

  const deleteTodo = useCallback(
    (credentials) => dispatch(deleteTodoThunk(credentials)),
    [dispatch]
  );

  const patchWater = useCallback(
    (credentials) => dispatch(patchWatersThunk(credentials)),
    [dispatch]
  );

  return {
    dailyNorm,
    reps,
    filter,
    getWaters,
    addDailyNorma,
    deleteTodo,
    patchWater,
  };
};

export default useWater;
