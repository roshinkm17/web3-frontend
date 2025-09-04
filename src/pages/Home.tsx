import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { useEffect } from 'react';

import WalletInfo from '@/components/WalletInfo';
import { Loader } from '@/components/ui/loader';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { MessageForm } from '@/modules/MessageForm/MessageForm';
import { VerificationDialog } from '@/modules/MessageForm/VerificationDialog';
import { MessageHistory } from '@/modules/MessageHistory/MessageHistory';
import WalletAuth from '@/modules/WalletAuth/WalletAuth';
import { setCurrentUser } from '@/store/history/historySlice';
import { PageWrapper } from '../components/PageWrapper';

const Home = () => {
  const { user, loadingNetwork, primaryWallet } = useDynamicContext();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user && primaryWallet?.address) {
      dispatch(setCurrentUser(primaryWallet.address));
    }
  }, [user, primaryWallet?.address, dispatch]);

  if (loadingNetwork) {
    return <Loader />;
  }

  if (!user) {
    return (
      <PageWrapper>
        <WalletAuth />
      </PageWrapper>
    );
  }

  const walletAddress = primaryWallet?.address;

  return (
    <PageWrapper>
      <div className='md:max-w-[50%] lg:max-w-[320px] p-3'>
        <WalletInfo walletAddress={walletAddress ?? ''} />
        <MessageForm />
        <MessageHistory />
        <VerificationDialog />
      </div>
    </PageWrapper>
  );
};

export default Home;
