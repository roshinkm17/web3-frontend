import { useDynamicContext } from '@dynamic-labs/sdk-react-core';

import WalletInfo from '@/components/WalletInfo';
import { Loader } from '@/components/ui/loader';
import { MessageForm } from '@/modules/MessageForm/MessageForm';
import { VerificationDialog } from '@/modules/MessageForm/VerificationDialog';
import WalletAuth from '@/modules/WalletAuth/WalletAuth';

const Home = () => {
  const { user, loadingNetwork, primaryWallet } = useDynamicContext();

  if (loadingNetwork) {
    return <Loader />;
  }

  if (!user) {
    return <WalletAuth />;
  }

  const walletAddress = primaryWallet?.address;

  return (
    <main className='h-dvh w-dvw flex items-center justify-center'>
      <div className='md:max-w-[50%] lg:max-w-[320px] p-3'>
        <WalletInfo walletAddress={walletAddress ?? ''} />
        <MessageForm />
        <VerificationDialog />
      </div>
    </main>
  );
};

export default Home;
