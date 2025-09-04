import { useAppSelector } from "@/hooks/useAppSelector";
import { Button } from "../../components/ui/button";

const WalletAuth = () => {
  const { address, status } = useAppSelector((state) => state.wallet);

  return (
    <div>
      {status === "idle" && <Button>Connect Wallet</Button>}
      {status === "connected" && (
        <>
          <div>{address}</div>
          <Button>Disconnect Wallet</Button>
        </>
      )}
    </div>
  );
};

export default WalletAuth;
