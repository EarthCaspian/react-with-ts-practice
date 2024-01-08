// import { combineReducers } from "redux";
// import { cartReducer } from "./reducers/cartReducer";
import { combineReducers } from "@reduxjs/toolkit";
import { cartSlice } from "./reducksTKSlice";


// export const rootReducer =  combineReducers({
//     cart:cartReducer
// });

export const cartSliceReducer = combineReducers({
   cart:cartSlice,
})