import { useEffect, useState } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { resetMessages } from '@/store/messages/messagesSlice';

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
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Message is valid</DialogTitle>
            <DialogDescription>Signer: {signer}</DialogDescription>
            <DialogDescription>
              Original Message: {originalMessage}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )
  );
};
