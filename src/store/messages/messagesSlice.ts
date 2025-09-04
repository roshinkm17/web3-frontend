import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface MessagesState {
  message: string;
  signature: string;
  isValid: boolean;
  signer: string;
  originalMessage: string;
  error: string | null;
}

const initialState: MessagesState = {
  message: '',
  signature: '',
  isValid: false,
  signer: '',
  originalMessage: '',
  error: null,
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    setSignature: (state, action: PayloadAction<string>) => {
      state.signature = action.payload;
    },
    setIsValid: (state, action: PayloadAction<boolean>) => {
      state.isValid = action.payload;
    },
    setSigner: (state, action: PayloadAction<string>) => {
      state.signer = action.payload;
    },
    setOriginalMessage: (state, action: PayloadAction<string>) => {
      state.originalMessage = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    resetMessages: state => {
      state.message = '';
      state.signature = '';
      state.isValid = false;
      state.signer = '';
      state.originalMessage = '';
    },
  },
});

export const {
  setMessage,
  setSignature,
  setIsValid,
  setSigner,
  setError,
  setOriginalMessage,
  resetMessages,
} = messagesSlice.actions;
export default messagesSlice.reducer;
