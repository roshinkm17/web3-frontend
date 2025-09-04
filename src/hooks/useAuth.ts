import {
  setOtpGenerationStatus,
  setOtpVerificationStatus,
} from "@/store/auth/authSlice";
import { useConnectWithOtp } from "@dynamic-labs/sdk-react-core";
import { useAppDispatch } from "./useAppDispatch";
import { AuthStatus, OtpGenerationStatus } from "@/store/auth/constants";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { connectWithEmail, verifyOneTimePassword } = useConnectWithOtp();

  const sendOtp = async (email: string) => {
    await connectWithEmail(email);
    dispatch(setOtpGenerationStatus(OtpGenerationStatus.GENERATED));
  };

  const verifyOtp = async (otp: string) => {
    try {
      const res = await verifyOneTimePassword(otp);
      if (res && res.user) {
        dispatch(setOtpVerificationStatus(AuthStatus.AUTHENTICATED));
        return;
      }
    } catch (error) {
      dispatch(setOtpVerificationStatus(AuthStatus.FAILED));
      console.error(error);
    }

    dispatch(setOtpVerificationStatus(AuthStatus.FAILED));
  };

  return {
    sendOtp,
    verifyOtp,
  };
};
