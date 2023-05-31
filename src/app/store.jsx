import { configureStore } from "@reduxjs/toolkit";
import authReducer2 from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer2,
  },
});
