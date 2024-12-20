import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, color, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id && item.color === color);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ id, color, quantity });
      }
    },
    removeFromCart: (state, action) => {
      const { id, color } = action.payload;
      const existingItem = state.items.find(item => item.id === id && item.color === color);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity--;
        } else {
          state.items = state.items.filter(item => item.id !== id || item.color !== color);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const selectTotalItems = (state) => {
  return state.cart.items.reduce((total, item) => total + item.quantity, 0);
};

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
