import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getWatersThunk,
  addDailyNormaThunk,
  deleteTodoThunk,
  patchWatersThunk,
} from '../store/water/thunk';

import {
  selectWater,
  selectFilter,
  selectTodo,
} from '../store/water/selectors';

const useWater = () => {
  const dispatch = useDispatch();

  const water = useSelector(selectWater);
  const todo = useSelector(selectTodo);
  const filterWater = useSelector(selectFilter);

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
    water,
    todo,
    filterWater,
    getWaters,
    addDailyNorma,
    deleteTodo,
    patchWater,
  };
};

export default useWater;
