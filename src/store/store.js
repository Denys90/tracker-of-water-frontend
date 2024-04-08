import { configureStore } from '@reduxjs/toolkit';

import { usersReducer } from './user/userSlice';
import { filterReducer } from './water/filterSlice';
import { waterReducer } from './water/waterSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { rootReducer } from '../root/slice';

const persistConfig = {
  key: 'users',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, usersReducer);

const reducer = {
  users: persistedReducer,
  waters: waterReducer,
  filter: filterReducer,
  root: rootReducer,
};
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
