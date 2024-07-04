import React from "react";
// import { useSelector } from "react-redux";
import {increment,decrement} from "../redux/slices/counter/counterSlice"
import { useSelector, useDispatch } from 'react-redux'
const   Component1=()=>{
  const count =useSelector((s)=>s.counter)
  const dispatch=useDispatch(); 
  return (
    <div>
    <h1>
        Comp1:- {count}
        <h1> Count is:-{count}</h1>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>    
    </h1>
    </div>
  )
}
export default Component1;