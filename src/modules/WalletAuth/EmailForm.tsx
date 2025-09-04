import type { EmailFormProps } from './types';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2Icon } from 'lucide-react';

const EmailForm = ({
  email,
  onChange,
  onSubmit,
  error,
  isLoading,
}: EmailFormProps) => {
  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-3'>
      <Label>Email</Label>
      <Input
        value={email}
        onChange={onChange}
        placeholder='john.doe@example.com'
        type='email'
      />
      {error && <span className='text-red-500 text-sm'>{error}</span>}
      <Button type='submit' disabled={isLoading}>
        {isLoading ? (
          <span className='flex items-center gap-2'>
            <Loader2Icon className='w-4 h-4 animate-spin' /> Generating OTP...
          </span>
        ) : (
          'Generate OTP'
        )}
      </Button>
    </form>
  );
};

export default EmailForm;
