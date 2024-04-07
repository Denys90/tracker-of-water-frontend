import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addWatersThunk,
  postWatersThunk,
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
    (credentials) => dispatch(postWatersThunk(credentials)),
    [dispatch]
  );

  const addDailyNorma = useCallback(
    (credentials) => dispatch(addDailyNormaThunk(credentials)),
    [dispatch]
  );

  const deleteReps = useCallback(
    (id) => dispatch(deleteTodoThunk(id)),
    [dispatch]
  );

  const patchWater = useCallback(
    (credentials) => dispatch(patchWatersThunk(credentials)),
    [dispatch]
  );
  const addWater = useCallback(
    (credentials) => dispatch(addWatersThunk(credentials)),
    [dispatch]
  );

  return {
    dailyNorm,
    reps,
    filter,
    getWaters,
    addDailyNorma,
    deleteReps,
    patchWater,
    addWater,
  };
};

export default useWater;
