import { createSlice } from "@reduxjs/toolkit";

export const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add(state,action){
            const hasProduct = state.some((product) => product.id === action.payload.id)
            if(!hasProduct) {
                state.push(action.payload);
            } else {
                // count inc logic
            }
        },
        remove(state,action){
           return state.filter((item)=>item.id!==action.payload)
        }
    }
})

export const {add,remove}= cartSlice.actions;
export default cartSlice.reducer;
 