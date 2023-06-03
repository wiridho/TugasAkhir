import { createSlice } from "@reduxjs/toolkit";
import { handleLogin } from "../../service/authService";

const initialState = {
  isSuccess: null,
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
  extraReducers: (builder) => {
    builder
      .addCase(handleLogin.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(handleLogin.fulfilled, (state, action) => {
        state.isSuccess = "login";
        state.data = action.payload;
      })
      .addCase(handleLogin.rejected, (state, action) => {
        state.isError = true;
        state.messageError = action.payload;
      });
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
