import { configureStore } from '@reduxjs/toolkit';
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
import storage from 'redux-persist/lib/storage';
import  carsReducer  from './car/carsSlice';
import { filterReducer } from './filter/filterSlice';




const carsPersistConfig = {
  key: 'cars',
  storage,
  whitelist: ['favorites'],
};

export const store = configureStore({
  reducer: {
        cars: persistReducer(carsPersistConfig, carsReducer),
        filter: filterReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
