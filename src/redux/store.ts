import {configureStore} from '@reduxjs/toolkit';
import rootReducers from './rootReducers';

export const store = configureStore({
  reducer: rootReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispacth = typeof store.dispatch;
