import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSuccess: false,
  isSuccessRegister: false,
  isLoading: false,
  isError: false,
  data: null,
  token: {},
  messageError: null,
  // buat private route
  is_auth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, data) {
      state.is_auth = data.payload;
    },
    setToken(state, data) {
      state.token = data.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
