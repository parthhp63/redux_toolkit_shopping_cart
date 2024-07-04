import {createSlice} from '@reduxjs/toolkit';
import useFetch from "../../../customhooks/useFetch"

// const productFet

export const counterSlice = createSlice({
    initialState:0,
    name: 'counter',
    reducers: {
      increment: (state) => {
       return state += 1
      },
      decrement: (state) => {
       return  state -=1
      }                                                          
    },
  })

  export const {decrement,increment}=counterSlice.actions
  export default counterSlice.reducer;