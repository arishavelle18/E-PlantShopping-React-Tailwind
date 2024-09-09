import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
//name,image.descrp,cost,quantity

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, actions) {
      const { name, image, description, cost } = actions.payload;
      const check = state.find((cartItem) => cartItem.name === name);
      if (!check) {
        state.push({ name, image, cost, quantity: 1 });
      } else {
        check.quantity++;
      }
    },
    removeItem(state, actions) {
      const check = state.indexOf((state) => state.name === actions.payload);
      if (check) {
        state.splice(check - 1, 1);
      }
      console.log(state);
    },
    updateQuantity(state, actions) {
      const { name, quantity } = actions.payload;
      const check = state.find((cartItem) => cartItem.name === name);
      if (check) {
        check.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
