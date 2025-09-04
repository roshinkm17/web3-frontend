import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAuth } from "@/hooks/useAuth";
import { setEmail, setError, setOtp } from "@/store/auth/authSlice";
import EmailForm from "./EmailForm";
import { OtpInput } from "./OtpInput";
import { OTP_LENGTH } from "./constants";
import { OtpGenerationStatus } from "@/store/auth/constants";

const WalletAuth = () => {
  const { email, otpGenerationStatus, otp, error } = useAppSelector(
    (state) => state.auth
  );
  const dispatch = useAppDispatch();

  const { sendOtp, verifyOtp } = useAuth();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      dispatch(setError("Email is required"));
      return;
    }

    sendOtp(email);
  };

  const handleOtpSubmit = (otp: string) => {
    if (!otp) return;
    verifyOtp(otp);
  };

  const handleOtpChange = (otp: string) => {
    dispatch(setOtp(otp));

    if (otp.length === OTP_LENGTH) {
      handleOtpSubmit(otp);
    }
  };

  return (
    <div className="w-[320px] p-5">
      {otpGenerationStatus === OtpGenerationStatus.IDLE && (
        <EmailForm
          email={email}
          onChange={handleEmailChange}
          onSubmit={handleSubmit}
          error={error || undefined}
        />
      )}

      {otpGenerationStatus === OtpGenerationStatus.FAILED && (
        <span className="text-red-500 text-xs">
          Failed to generate OTP. Please try again.
        </span>
      )}

      {otpGenerationStatus === OtpGenerationStatus.GENERATED && (
        <OtpInput otp={otp} onChange={handleOtpChange} maxLength={OTP_LENGTH} />
      )}
    </div>
  );
};

export default WalletAuth;
