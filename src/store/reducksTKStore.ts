import { configureStore, combineReducers} from "@reduxjs/toolkit";
import { cartReducer} from "./reducksTKSlice";


// export const rootReducer = combineReducers({
//   cart:cartReducer,
// })


const store = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
    },
  });
}

export default store;