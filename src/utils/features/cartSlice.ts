import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from "./store";
import { Item, singleCartState } from "../models";

interface cartState {
    cart: singleCartState[]
  }
  
  // Define the initial state using that type
  const initialState: cartState = {
    cart : []
  }

export const cartSlice = createSlice({
    name :'cart',
    initialState,
    reducers : {
        addToCart : (state , action : PayloadAction<{item : Item}>) => {
            const itemPresent  = state.cart.find((item : singleCartState) => item.item.id === action.payload.item.id)
            if (itemPresent){
                itemPresent.quantity++
            }
            else {
                state.cart.push({ ...action.payload , quantity : 1})
            }
        },

        removeFromCart : (state, action : PayloadAction<{item : Item}>) => {
            const removeItem  = state.cart.filter((item : singleCartState ) => item.item.id !== action.payload.item.id)
            state.cart = removeItem
        },

        clearCard : (state) => {
            state.cart = []
        }
    },
    
})

export const {addToCart, removeFromCart, clearCard } = cartSlice.actions
export const selectCart = (state: RootState) => state.cart
export default cartSlice.reducer