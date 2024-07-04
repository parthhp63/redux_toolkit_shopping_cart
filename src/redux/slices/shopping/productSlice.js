import { createSlice } from "@reduxjs/toolkit";

const initialState={
    data:[]
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProduct:(state,action)=>{
            state.data=action.payload
        }
    },
  })

  export const {setProduct}=productSlice.actions
  
  export default productSlice.reducer;