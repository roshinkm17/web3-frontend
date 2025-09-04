import { REGEXP_ONLY_DIGITS } from 'input-otp';

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';

interface OtpInputProps {
  otp?: string;
  onChange: (otp: string) => void;
  maxLength: number;
}

export const OtpInput = ({ otp, onChange, maxLength = 6 }: OtpInputProps) => {
  const hasEvenSlots = maxLength % 2 === 0;

  return (
    <InputOTP
      maxLength={maxLength}
      value={otp}
      onChange={onChange}
      inputMode='numeric'
      pattern={REGEXP_ONLY_DIGITS}
    >
      <InputOTPGroup>
        {Array.from({ length: maxLength }).map((_, index) => {
          return (
            <>
              {hasEvenSlots && index === maxLength / 2 && <InputOTPSeparator />}
              <InputOTPSlot key={index} index={index} />
            </>
          );
        })}
      </InputOTPGroup>
    </InputOTP>
  );
};
