import { createAsyncThunk } from "@reduxjs/toolkit";
import { postLogin } from "../api/authAPI";

export const handleLogin = createAsyncThunk(
  "auth/login",
  async (params, { rejectWithValue }) => {
    try {
      const response = await postLogin({
        data: params.data,
        params: { action: "email-otp" },
      });
      params.navigate("/verifylogin");
      return response;
    } catch (error) {
      if (err) {
        const message = err.response.data.message;
        return rejectWithValue(message);
      }
    }
  }
);
