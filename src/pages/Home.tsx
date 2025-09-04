import { useDynamicContext } from '@dynamic-labs/sdk-react-core';

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
    <main className='p-5'>
      Wallet Address: {walletAddress}
      <MessageForm />
      <VerificationDialog />
    </main>
  );
};

export default Home;
