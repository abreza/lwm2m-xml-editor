import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { translatorReducer } from 'reduxSlices/localSlice';

const isDevelopment = process.env.NODE_ENV === 'development';

export const store = configureStore({
  reducer: {
    local: translatorReducer,
  },
  devTools: isDevelopment,
});

// "ReturnType" set type based on returned value from function
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
