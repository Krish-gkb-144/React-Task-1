import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Reducers/AuthReducer";

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
