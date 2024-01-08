import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./reducksTKSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;