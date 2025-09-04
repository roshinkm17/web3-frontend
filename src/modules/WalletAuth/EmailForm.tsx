import type { EmailFormProps } from './types';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const EmailForm = ({ email, onChange, onSubmit, error }: EmailFormProps) => {
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
      <Button type='submit'>Generate OTP</Button>
    </form>
  );
};

export default EmailForm;
