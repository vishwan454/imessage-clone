import { createSlice } from '@reduxjs/toolkit';

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    chat: null,
  },
  reducers: {
    lsetChat: (state,action) => {
      
      state.chatId=action.payload.chatId;
      state.chatName = action.payload.chatName
    },
  },
});

export const { logout, login } = chatSlice.actions;


export const selectChatName = state => state.chat.chatName;
export const selectChatId = (state) => state.chat.chatId

export default chatSlice.reducer;
