 import { configureStore } from "@reduxjs/toolkit";
 import cartReducer from "./cartSlice"

const appStore=configureStore({
   reducer:{
    //we will all multiple reducers here
      cart: cartReducer,
   },
});
export default appStore;