import React,{useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import useFetch from "../../customhooks/useFetch";
import { setProduct } from "../../redux/slices/shopping/productSlice";
import Home from "./Home";

const Products=()=>{
    const dispatch=useDispatch();
    const [data]=useFetch('https://fakestoreapi.com/products');

    useEffect(()=>{
        dispatch(setProduct(data))
    },[data])

}

export default Products;