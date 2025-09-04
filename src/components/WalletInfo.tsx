import { Check, Copy, Wallet } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { useCopy } from '@/hooks/useCopy';

interface WalletInfoProps {
  walletAddress: string;
}

const WalletInfo = ({ walletAddress }: WalletInfoProps) => {
  const { isCopied, handleCopy } = useCopy();

  return (
    <div className='gap-2 flex flex-col border-1 border-green-200 p-3 rounded-sm bg-green-100 text-green-900 position-relative overflow-hidden'>
      <div className='flex items-center gap-2'>
        <Wallet className='w-5 h-5 position-absolute left-3' />
        <span className='text-md font-semibold'>Connected Wallet</span>
        <Badge
          variant='secondary'
          className='cursor-pointer ms-1 bg-green-50 text-green-900 text-xs'
          onClick={() => handleCopy(walletAddress)}
        >
          {isCopied ? 'Copied' : 'Copy'} {isCopied ? <Check /> : <Copy />}
        </Badge>
      </div>
      <span className='text-xs line-clamp-1 overflow-ellipsis font-mono'>
        {walletAddress}
      </span>
    </div>
  );
};

export default WalletInfo;
