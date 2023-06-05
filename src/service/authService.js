import { createAsyncThunk } from "@reduxjs/toolkit";
import { postLogin, postVerification } from "../api/authAPI";
import { isData, isMessage } from "../utils/Response";
import apiConfig from "../api/apiConfig";
import axios from "axios";

export const handleLogin = createAsyncThunk(
  "auth/login",
  async (params, { rejectWithValue }) => {
    try {
      const response = await postLogin({
        data: params.data,
        params: { action: "email-otp" },
      });
      params.navigate("/verifylogin");
      console.log(response);
      return isData(response);
    } catch (error) {
      console.log("error", error);
      if (error.response.status === 404) {
        params.navigate("/register");
      }
      const message = isMessage(response);
      return rejectWithValue(message);
    }
  }
);

// Handle Login
// export const handleLogin = createAsyncThunk(
//   "auth/login",
//   async (params, thunkApi) => {
//     try {
//       const response = await axios.post(
//         `${apiConfig.baseUrl}/authentication/login?action=email-otp`,
//         params
//       );
//       console.log("response login", response.data.data);
//       return response.data.data;
//     } catch (err) {
//       if (err) {
//         const message = err.response.data.message;
//         return thunkApi.rejectWithValue(message);
//       }
//     }
//   }
// );

//Handle Register
export const handleRegister = createAsyncThunk(
  "auth/register",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${apiConfig.baseUrl}/authentication/register`,
        params.data
      );
      return response.data.data;
    } catch (err) {
      console.log("error", err);
      const errorMessage = err.response?.data?.message;
      params.setVisible(true);
      return rejectWithValue(errorMessage);
    }
  }
);

// Handle Verify Login OTP
export const verifyLoginOtp = createAsyncThunk(
  "auth/verifyLoginOtp",
  async (params) => {
    try {
      const response = await axios.post(
        `${apiConfig.baseUrl}/authentication/login?action=login`,
        params.form
      );
      console.log("response login otp", response.data.data);
      params.navigate("/");
      return response?.data.data;
    } catch (err) {
      console.log(err);
    }
  }
);

// export const verifyLoginOtp = createAsyncThunk(
//   "auth/verifyLoginOtp",
//   async (params, { rejectWithValue }) => {
//     console.log(params);
//     try {
//       const response = await postVerification({
//         data: params,
//         params: { action: "login" },
//       });
//       return isData(response);
//     } catch (error) {
//       const message = err.isMessage(response);
//       return rejectWithValue(message);
//     }
//   }
// );
