
import { ProductModel } from './../models/responses/ProductModel';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface CartState {
    cartItems: ProductModel[];
}

const initialCartState: CartState = {
    cartItems: [],
}

export const cartSlice = createSlice({
    name:'cart',
    initialState:initialCartState,
    reducers: {
        addToCart: (state: CartState, action: PayloadAction<ProductModel>) => {
            return { ...state, cartItems: [...state.cartItems, action.payload] };
        },
        removeFromCart : (state: CartState, action: PayloadAction<ProductModel>) => {
            return {cartItems: state.cartItems.filter(
                (item: ProductModel) => item.id !== action.payload.id)}
        },
        clearCart: (state: CartState) =>  {return {...state, cartItems:[]}}
    },
});


export const {addToCart,removeFromCart,clearCart} = cartSlice.actions;

export default cartSlice.reducer;