import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getAllWatersThunk,
  addWatersThunk,
  deleteWatersThunk,
  patchWatersThunk,
} from '../store/water/thunk';

import { selectWater, selectFilter } from '../store/water/selectors';

export const useUsers = () => {
  const dispatch = useDispatch();

  const water = useSelector(selectWater);
  const filterWater = useSelector(selectFilter);

  const getAllWaters = useCallback(
    (credentials) => dispatch(getAllWatersThunk(credentials)),
    [dispatch]
  );

  const addWater = useCallback(
    (credentials) => dispatch(addWatersThunk(credentials)),
    [dispatch]
  );

  const deleteWater = useCallback(
    (credentials) => dispatch(deleteWatersThunk(credentials)),
    [dispatch]
  );

  const patchWater = useCallback(
    (credentials) => dispatch(patchWatersThunk(credentials)),
    [dispatch]
  );

  return {
    water,
    filterWater,
    getAllWaters,
    addWater,
    deleteWater,
    patchWater,
  };
};
