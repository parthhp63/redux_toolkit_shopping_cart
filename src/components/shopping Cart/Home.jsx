import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useFetch from "../../customhooks/useFetch";
import { setProduct } from "../../redux/slices/shopping/productSlice";
// import Home from "./Home";
import { add } from "../../redux/slices/shopping/cartSlice";
import "../../assets/design/home.css"

const Home = () => {
  const dispatch = useDispatch();
  const [data, isloading] = useFetch("https://fakestoreapi.com/products");

  useEffect(() => {
    if (data) {
      dispatch(setProduct(data));
    }
  }, [data]);

  const { data: products } = useSelector((s) => s.products);

  const handleadd=(product)=>{
     dispatch(add(product));
  }
  return (
    <div className="container">
      {console.log(products)}
      {products.length > 0 &&
        products?.map((product) => {
          return( 
          <div className="product-wrapper">
          <div className="card" key={product.id}>
            {console.log("in conditon")}
 
            <img
              src={product.image}
              alt="image"
              style={{ height: "200px", width: "200px", objectFit:"contain"}}
            />
      
            <h3>Title:-{product.title}</h3><br />
            <h3>Price:- {product.price}</h3>
            <h3>Rating-rate:- {product.rating.rate}</h3>
            <h3>Rating-count:- {product.rating.count}</h3>
            <button className="btn" onClick={()=>handleadd(product)}>Add to Cart</button>


          </div>
          </div>
          )
        })}
    </div>
  );
};
export default Home;
