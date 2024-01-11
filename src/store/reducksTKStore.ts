import { configureStore} from "@reduxjs/toolkit";
import { cartReducer} from "./reducksTKSlice";


const store = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
    },
  });
}

export default store;