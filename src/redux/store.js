import { configureStore } from '@reduxjs/toolkit';
import { appReducers } from './reducers';

export const store = configureStore({
  reducer: appReducers,
});
