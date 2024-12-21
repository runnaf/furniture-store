import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addToCart: (state, action) => {
      const { color, quantity,  name, sale_price, price, id, image } = action.payload;
      const existingItem = state.items.find(item => item.id === id && item.color === color);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ color, quantity, name, sale_price, price, id, image });
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
    removeFromCartGoods: (state, action) => {
      const { id, color } = action.payload;
      state.items = state.items.filter(item => item.id !== id || item.color !== color);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const selectTotalItems = (state) => {
  return state.cart.items.reduce((total, item) => total + item.quantity, 0);
};

export const selectTotalPrice = (state) => {
  return state.cart.items.reduce((total, item) => total + item.price*item.quantity, 0);
};

export const selectTotalSalePrice = (state) => {
  return state.cart.items.reduce((total, item) => total + item.sale_price*item.quantity, 0);
};

export const { addToCart, removeFromCart, clearCart, removeFromCartGoods } = cartSlice.actions;
export default cartSlice.reducer;
