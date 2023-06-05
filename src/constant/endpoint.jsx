// const API_URL = process.env.REACT_APP_API_BASE_URL;

export const END_POINT = {
  AUTH: {
    LOGIN: "/authentication/login",
    LOGIN_RESEND_OTP: "/authentication/login/otp/resend",
    REGISTER: "/authentication/register",
    VERIFICATION_EMAIl: (userId, token) =>
      `/authentication/verification/email/${userId}/${token}`,
    VERIFICATION_EMAIL_RESEND: (userId) =>
      `/authentication/verification/email/${userId}/resend`,
    REFRESH_TOKEN: "/authentication/token/refresh",
    RESET_PASSWORD: "/authentication/password/reset/request",
    RESEND_PASSWORD: "/authentication/password/reset/request/change",
  },
  LENDER: {},
  BORROWER: {},
};
