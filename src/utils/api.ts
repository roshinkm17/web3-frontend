import type { VerifySignatureResponse } from './types';

export const verifySignatureFromRemote = async (
  signature: string,
  message: string
): Promise<VerifySignatureResponse> => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_HOST}/api/verify-signature`,
    {
      method: 'POST',
      body: JSON.stringify({ signature, message }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return response.json();
};
