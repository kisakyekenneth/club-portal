import { configureStore } from '@reduxjs/toolkit';
import reducer from '../reducer/reducer';

export const store = configureStore({
  reducer,
});
//Export types based on the store itself
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
