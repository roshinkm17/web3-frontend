import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface MessageHistoryItem {
  id: string;
  message: string;
  createdOn: string;
  userId: string;
  walletAddress: string;
}

interface HistoryState {
  history: MessageHistoryItem[];
  currentUserId: string | null;
}

const HISTORY_STORAGE_KEY = 'message_history';

// localStorage utilities
const saveHistoryToStorage = (history: MessageHistoryItem[]) => {
  try {
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(history));
  } catch (error) {
    console.error('Failed to save history to localStorage:', error);
  }
};

const loadHistoryFromStorage = (): MessageHistoryItem[] => {
  try {
    const stored = localStorage.getItem(HISTORY_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Failed to load history from localStorage:', error);
    return [];
  }
};

const getHistoryForUser = (userId: string): MessageHistoryItem[] => {
  const allHistory = loadHistoryFromStorage();
  return allHistory.filter(item => item.userId === userId);
};

const initialState: HistoryState = {
  history: [],
  currentUserId: null,
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<string>) => {
      state.currentUserId = action.payload;
      state.history = getHistoryForUser(action.payload);
    },
    addMessage: (
      state,
      action: PayloadAction<Omit<MessageHistoryItem, 'id'>>
    ) => {
      const newMessage: MessageHistoryItem = {
        ...action.payload,
        id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      };

      state.history.unshift(newMessage);

      const allHistory = loadHistoryFromStorage();
      allHistory.unshift(newMessage);
      saveHistoryToStorage(allHistory);
    },
    loadUserHistory: (state, action: PayloadAction<string>) => {
      state.history = getHistoryForUser(action.payload);
      state.currentUserId = action.payload;
    },
  },
});

export const { setCurrentUser, addMessage, loadUserHistory } =
  historySlice.actions;

export default historySlice.reducer;
