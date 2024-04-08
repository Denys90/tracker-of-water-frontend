import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  createWaterThunk,
  addOneTodoThunk,
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

  const createWater = useCallback(
    (credentials) => dispatch(createWaterThunk(credentials)),
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
  const addOneDrink = useCallback(
    (credentials) => dispatch(addOneTodoThunk(credentials)),
    [dispatch]
  );

  return {
    dailyNorm,
    reps,
    filter,

    addDailyNorma,
    deleteReps,
    patchWater,
    addOneDrink,
    createWater,
  };
};

export default useWater;
