import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useMessage } from '@/hooks/useMessage';
import {
  setError,
  setIsLoading,
  setMessage,
} from '@/store/messages/messagesSlice';
import { Loader2Icon } from 'lucide-react';

export const MessageForm = () => {
  const dispatch = useAppDispatch();
  const { error, message, isLoading } = useAppSelector(state => state.messages);

  const { signMessage, verifySignature } = useMessage();

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setError(null));
    dispatch(setMessage(e.target.value));
  };

  const handleSubmit = async () => {
    dispatch(setError(null));
    if (!message) {
      dispatch(setError('Message is required'));
      return;
    }
    dispatch(setIsLoading(true));
    const res = await signMessage();
    if (res.success && res.signature) {
      verifySignature(res.signature, message);
    }
    dispatch(setIsLoading(false));
  };

  return (
    <div className='flex flex-col gap-3 mt-12'>
      <Label>Enter the message you want to sign</Label>
      <Input
        minLength={1}
        placeholder='Hola!'
        onChange={handleMessageChange}
        value={message}
      />
      <Button type='submit' onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? (
          <span className='flex items-center gap-2'>
            <Loader2Icon className='w-4 h-4 animate-spin' /> Signing...
          </span>
        ) : (
          'Sign message'
        )}
      </Button>
      {error && <p className='text-red-500 text-sm'>{error}</p>}
    </div>
  );
};
