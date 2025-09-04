export type VerifySignatureSuccessResponse = {
  isValid: true;
  signer: string;
  originalMessage: string;
  message: never;
};

export type VerifySignatureErrorResponse = {
  isValid: false;
  message: string;
  signer?: never;
  originalMessage?: never;
};

export type VerifySignatureResponse =
  | VerifySignatureSuccessResponse
  | VerifySignatureErrorResponse;
