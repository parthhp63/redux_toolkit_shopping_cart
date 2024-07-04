import React  from "react";
import { useSelector,useDispatch } from "react-redux";
import { remove } from "../../redux/slices/shopping/cartSlice";
const Cart=()=>{
    const dispatch=useDispatch()
  const cartItems=useSelector( (state)=>state.cart);

  const handleremove=(id)=>{
    dispatch(remove(id))
  }
return(
    <div className="cart-container">
    <div className="cart-wrapper">
        {cartItems.map((item)=>(
          
          <div className="cart-card">
          <img src={item.image} style={{width:'100px', height:'100px',objectFit:'contain'}} alt="img" />
          <h5>{item.title}</h5>
          <h5>{item.price}</h5>
          <button className="button" onClick={()=>handleremove(item.id)}> Remove</button>
          </div>                                                                              
        ))}
    </div>
    </div>
)
}
export default Cart;  