import { useDynamicContext } from '@dynamic-labs/sdk-react-core';

import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';

import {
  setError,
  setIsValid,
  setOriginalMessage,
  setSignature,
  setSigner,
} from '@/store/messages/messagesSlice';
import { verifySignatureFromRemote } from '@/utils/api';

export const useMessage = () => {
  const dispatch = useAppDispatch();
  const { primaryWallet } = useDynamicContext();
  const { message } = useAppSelector(state => state.messages);

  const signMessage = async (): Promise<{
    success: boolean;
    signature?: string;
  }> => {
    if (!primaryWallet) {
      dispatch(setError('No wallet found. Please refresh the page.'));
      return { success: false };
    }

    try {
      const signature = await primaryWallet.signMessage(message);

      if (!signature) {
        dispatch(setError('Failed to sign message. Please try again.'));
        return { success: false };
      }

      dispatch(setSignature(signature));
      dispatch(setError(null));
      return { success: true, signature };
    } catch (error) {
      dispatch(setError('Failed to sign message. Please try again.'));
      console.error(error);
      return { success: false };
    }
  };

  const verifySignature = async (signature: string, message: string) => {
    try {
      const res = await verifySignatureFromRemote(signature, message);
      if (!res.isValid) {
        dispatch(setError(res.message));
        return;
      }

      dispatch(setIsValid(res.isValid));
      dispatch(setSigner(res.signer));
      dispatch(setOriginalMessage(res.originalMessage));
      dispatch(setError(null));
    } catch (error) {
      console.error(error);
    }
  };

  return {
    signMessage,
    verifySignature,
  };
};
