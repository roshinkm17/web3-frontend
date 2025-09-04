import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useMessage } from "@/hooks/useMessage";
import { setError, setMessage } from "@/store/messages/messagesSlice";

export const MessageForm = () => {
  const dispatch = useAppDispatch();
  const { signature, error, message } = useAppSelector(
    (state) => state.messages
  );

  const { signMessage, verifySignature } = useMessage();

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setError(null));
    dispatch(setMessage(e.target.value));
  };

  const handleSubmit = async () => {
    if (!message) {
      dispatch(setError("Message is required"));
      return;
    }
    const res = await signMessage();
    if (res.success && res.signature) {
      verifySignature(res.signature, message);
    }
  };

  return (
    <div className="flex flex-col gap-3 w-[320px] mt-5">
      <Label>Enter the message you want to sign</Label>
      <Input
        minLength={1}
        placeholder="Hola!"
        onChange={handleMessageChange}
        value={message}
      />
      <Button type="submit" onClick={handleSubmit}>
        Sign message
      </Button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {signature && (
        <p className="w-[200px] text-sm break-words">Signature: {signature}</p>
      )}
    </div>
  );
};
