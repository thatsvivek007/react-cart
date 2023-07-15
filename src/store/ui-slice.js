import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { cartIsVisible: false, notification: null },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = action.payload;
    },
    hideNotification(state) {
      state.notification = null;
    }
  }
});

export const uiActions = uiSlice.actions;

export default uiSlice;