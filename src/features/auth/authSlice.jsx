import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiConfig from "../../api/apiConfig";
import Swal from "sweetalert2";
// import { handleLogin } from "../../service/authService";
import { isData } from "../../utils/Response";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const initialState = {
  isSuccess: false,
  isSuccessRegister: false,
  isLoading: false,
  isError: false,
  data: [],
  accessToken: null,
  refreshToken: null,
  messageError: null,
  // buat private route
  isAuthenticated: false,
};

// Handle Register
export const handleRegister = createAsyncThunk(
  "auth/register",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${apiConfig.baseUrl}/authentication/register`,
        params
      );
      return response.data.data;
    } catch (err) {
      console.log("error", err);
      const status = err.response?.status;
      const errorMessage = err.response?.data?.message;
      console.log("status", status);
      console.log("message", errorMessage);
      // 409 = Duplicate Email
      if (status === 409) {
        // Swal.fire({
        //   title: "Error!",
        //   text: errorMessage,
        //   icon: "error",
        //   confirmButtonText: "Ok",
        // });
        // Handle specific status code and return an appropriate message value
        return rejectWithValue({ status, message: errorMessage });
      } else {
        // Swal.fire({
        //   title: "Error!",
        //   text: errorMessage,
        //   icon: "error",
        //   confirmButtonText: "Ok",
        // });
        // Reject with the generic error value
        return rejectWithValue({ status, message: errorMessage });
      }
    }
  }
);

// Handle Resend Verify Email
export const resendRegisterVerify = createAsyncThunk(
  "auth/resend",
  async (userId) => {
    try {
      const response = await axios.post(
        `${apiConfig.baseUrl}/authentication/verification/email/${userId}/resend`,
        { userId }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }
);

//Handle Verify Email Account
export const verifyEmailAccount = createAsyncThunk(
  "auth/verify/email",
  async (params) => {
    try {
      const response = await axios.post(
        `${apiConfig.baseUrl}/authentication/verification/email/${params.userId}/${params.token}`
      );
      console.log("response verify", response);
      return response.data.data;
    } catch (error) {
      console.error(error);
    }
  }
);

// Handle Login
export const handleLogin = createAsyncThunk(
  "auth/login",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${apiConfig.baseUrl}/authentication/login?action=email-otp`,
        params
      );
      if (response.status === 200) {
        console.log("response login", response);
        return response.data.data;
      }
    } catch (err) {
      const message = err.response.data.message;
      return rejectWithValue(message);
    }
  }
);

// Handle Login OTP
// export const verifyLoginOtp = createAsyncThunk(
//   "auth/verifyLoginOtp",
//   async (params) => {
//     try {
//       const response = await axios.post(
//         `${apiConfig.baseUrl}/authentication/login?action=login`,
//         params
//       );
//       console.log("response login otp", response.data.data);
//       return response?.data.data;
//       // localStorage.setItem("token", JSON.stringify(response.data.data));
//       // let accessTokens = response.data.data.accessToken;
//       // let refreshTokens = response.data.data.refreshToken;
//       // const accessToken = localStorage.setItem(
//       //   "accessToken",
//       //   JSON.stringify(accessTokens)
//       // );
//       // const refreshToken = localStorage.setItem(
//       //   "accessToken",
//       //   JSON.stringify(refreshTokens)
//       // );
//       // return response.data.data;
//     } catch (err) {
//       console.log(err);
//     }
//   }
// );

// Handle Resend Login OTP
export const resendLoginOtp = createAsyncThunk(
  "auth/resend/login",
  async (params) => {
    try {
      console.log("params", params);
      const response = await axios.post(
        `${apiConfig.baseUrl}/authentication/login/otp/resend`,
        params
      );
      console.log("response resend otp", response);
    } catch (err) {
      console.log(err);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle Register
      // .addCase(handleRegister.pending, (state) => {
      //   state.isLoading = true;
      //   state.isError = false;
      //   state.isSuccessRegister = false;
      // })
      // .addCase(handleRegister.fulfilled, (state, action) => {
      //   console.log(action.payload);
      //   state.isLoading = false;
      //   state.isError = false;
      //   state.isSuccessRegister = true;
      //   state.data = action.payload;
      // })
      // .addCase(handleRegister.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.isError = true;
      //   state.isSuccessRegister = false;
      //   state.messageError = action.payload;
      // })
      // Resend Verify Link Register
      // .addCase(resendRegisterVerify.pending, (state) => {
      //   state.isLoading = true;
      //   state.isError = false;
      // })
      // .addCase(resendRegisterVerify.fulfilled, (state) => {
      //   state.isLoading = false;
      //   state.isError = false;
      // })
      // .addCase(resendRegisterVerify.rejected, (state) => {
      //   state.isLoading = false;
      //   state.isError = true;
      // })
      // Handle Login
      .addCase(handleLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(handleLogin.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(handleLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.messageError = action.payload;
      })
      // Handle Verify Login OTP
      .addCase(verifyLoginOtp.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(verifyLoginOtp.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.accessToken = action.payload.data?.accessToken;
        state.refreshToken = action.payload.data?.refreshToken;
        const decodeAccessToken = jwtDecode(accessToken);
        state.roles = decodeAccessToken.roles;
        state.isAuthenticated = true;
      })
      .addCase(verifyLoginOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.messageError = action.payload;
      });
    // Resend OTP
    // .addCase(resendLoginOtp.pending, (state) => {
    //   state.isLoading = true;
    //   state.isError = false;
    // })
    // .addCase(resendLoginOtp.fulfilled, (state) => {
    //   state.isLoading = false;
    //   state.isError = false;
    // })
    // .addCase(resendLoginOtp.rejected, (state) => {
    //   state.isLoading = false;
    //   state.isError = true;
    // });
  },
});

export default authSlice.reducer;
