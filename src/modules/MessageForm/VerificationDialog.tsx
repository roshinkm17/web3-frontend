import { useEffect, useState } from 'react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { resetMessages } from '@/store/messages/messagesSlice';
import { CheckCircle2Icon } from 'lucide-react';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';

const Info = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className='flex'>
      <Label className='text-sm font-medium text-gray-500 bg-gray-100 p-2 rounded-s-md whitespace-nowrap'>
        {label}
      </Label>
      <Input value={value} className='w-full text-sm rounded-s-none' disabled />
    </div>
  );
};

export const VerificationDialog = () => {
  const { isValid, signer, originalMessage } = useAppSelector(
    state => state.messages
  );
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isValid) {
      setOpen(true);
    }
  }, [isValid]);

  const handleDialogClose = () => {
    setOpen(false);
    dispatch(resetMessages());
  };

  return (
    isValid && (
      <Dialog open={open} onOpenChange={handleDialogClose}>
        <DialogContent className='max-w-md'>
          <DialogHeader>
            <CheckCircle2Icon className='w-15 h-15 text-green-700 mb-2 mx-auto' />
            <DialogTitle className='mb-4 text-center'>
              Message is valid
            </DialogTitle>
            <Info label='Signer' value={signer} />
            <Info label='Original Message' value={originalMessage} />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )
  );
};
