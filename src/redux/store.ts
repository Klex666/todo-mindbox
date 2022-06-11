import { configureStore } from '@reduxjs/toolkit';

import tasksReducer from './slices/tasksSlice';
import inputReducer from './slices/inputSlice';
import headerReducer from './slices/headerSlice';

export const store = configureStore({
  reducer: {
    tasksReducer,
    inputReducer,
    headerReducer,
  },
});

export type TypeRootState = ReturnType<typeof store.getState>;
