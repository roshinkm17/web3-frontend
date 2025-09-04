import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { AuthStatus, OtpGenerationStatus } from "./constants";

type AuthStatusType = (typeof AuthStatus)[keyof typeof AuthStatus];
type OtpGenerationStatusType =
  (typeof OtpGenerationStatus)[keyof typeof OtpGenerationStatus];

export interface AuthState {
  email: string;
  status: AuthStatusType;
  error?: string | null;
  otp?: string;
  otpVerificationStatus?: AuthStatusType;
  otpGenerationStatus?: OtpGenerationStatusType;
}

const initialState: AuthState = {
  email: "",
  status: AuthStatus.IDLE,
  error: null,
  otp: "",
  otpVerificationStatus: AuthStatus.IDLE,
  otpGenerationStatus: OtpGenerationStatus.IDLE,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setOtp: (state, action: PayloadAction<string>) => {
      state.otp = action.payload;
    },
    setOtpVerificationStatus: (
      state,
      action: PayloadAction<AuthStatusType>
    ) => {
      state.otpVerificationStatus = action.payload;
    },
    setOtpGenerationStatus: (
      state,
      action: PayloadAction<OtpGenerationStatusType>
    ) => {
      state.otpGenerationStatus = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setEmail,
  setOtp,
  setOtpVerificationStatus,
  setOtpGenerationStatus,
  setError,
} = authSlice.actions;
export default authSlice.reducer;
