import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./components/ProductSlice";
import cartSlice from "./components/CartSlice";
const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
  },
});

export default store;
