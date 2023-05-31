// const API_URL = process.env.REACT_APP_API_BASE_URL;

export const END_POINT = {
  AUTH: {
    LOGIN: "/authentication/login",
    VERIFICATION: (userId, token) =>
      `/authentication/verification/email/${userId}/${token}`,
    VERIFICATION_RESEND: (userId) =>
      `/authentication/verification/email/${userId}/resend`,
    RESET_PASSWORD: "/authentication/password/reset/request",
    RESEND_PASSWORD: "/authentication/password/reset/request/change",
  },
  LENDER: {},
  BORROWER: {},
};
