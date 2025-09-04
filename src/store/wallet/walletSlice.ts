import { WalletStatus } from "./constants";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type WalletStatusType = (typeof WalletStatus)[keyof typeof WalletStatus];

interface WalletState {
  address: string | null;
  status: WalletStatusType;
  error?: string | null;
}

const initialState: WalletState = {
  address: null,
  status: WalletStatus.IDLE,
  error: null,
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
  },
});

export const { setAddress } = walletSlice.actions;
export default walletSlice.reducer;
