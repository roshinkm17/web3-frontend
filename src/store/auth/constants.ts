export const AuthStatus = {
  IDLE: "idle",
  LOADING: "loading",
  AUTHENTICATED: "authenticated",
  FAILED: "failed",
} as const;

export const OtpGenerationStatus = {
  IDLE: "idle",
  GENERATED: "generated",
  FAILED: "failed",
} as const;
