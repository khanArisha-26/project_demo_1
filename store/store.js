import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import { usersApi } from "./usersApi";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});