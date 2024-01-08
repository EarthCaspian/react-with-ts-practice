//import {legacy_createStore as createStore} from "redux";
import { cartSliceReducer } from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";

// export const configureStore = () => {
//   return createStore(rootReducer);
// };

// export default configureStore({
//   reducer: {
//     createStore: cartSliceReducer,
//   },
// });