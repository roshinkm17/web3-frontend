import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface MessagesState {
  message: string;
  signature: string;
  isValid: boolean;
  signer: string;
}

const initialState: MessagesState = {
  message: "",
  signature: "",
  isValid: false,
  signer: "",
};

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

export const { setMessage } = messagesSlice.actions;
export default messagesSlice.reducer;
