import { Loader } from "@/components/ui/loader";
import WalletAuth from "@/modules/WalletAuth/WalletAuth";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

const Home = () => {
  const { user, loadingNetwork } = useDynamicContext();

  const shouldShowWalletAuth = !user && !loadingNetwork;

  return (
    <main className="p-5">
      {loadingNetwork && <Loader />}
      {user && <div>Welcome {user.email}</div>}
      {shouldShowWalletAuth && <WalletAuth />}
    </main>
  );
};

export default Home;
