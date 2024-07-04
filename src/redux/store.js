import {configureStore} from "@reduxjs/toolkit"
import counterSlice from "./slices/counter/counterSlice"
import productSlice from "./slices/shopping/productSlice"
// import counter from "./slices/counter/counterSlice.js"
import cartSlice from "./slices/shopping/cartSlice"
export const  store = configureStore({
      reducer: {
        counter:counterSlice,
        products:productSlice,
        cart:cartSlice
    },
  })