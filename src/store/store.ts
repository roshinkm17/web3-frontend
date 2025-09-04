import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from "@/store/messages/messagesSlice";
import walletReducer from "@/store/wallet/walletSlice";

export const store = configureStore({
  reducer: {
    wallet: walletReducer,
    messages: messagesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
