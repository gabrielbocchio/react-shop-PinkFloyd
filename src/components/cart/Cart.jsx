import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./CartContent.css";
import CartItemCounter from "./CartItemCounter";

const Cart = () => {
  const { cart , setCart} = useContext(dataContext);

  const deleteProduct = (id) =>{
    const foundId = cart.find((item)=> item.id === id)

    const newCart = cart.filter((element)=>{
      return element !== foundId;
    })
    setCart(newCart)
  };

  return (
    <div className="cart-container">
      <hr />
      {cart &&
        cart.map((product) => (
          <div key={product.id} className="cart-item">
            <img
              src={product.image}
              className="cart-item-image"
              alt={product.name}
            />
            <h3 className="cart-item-name" style={{ width: '20%' }}>{product.name}</h3>
            <h4 className="cart-item-price">${(product.price * product.quantity).toFixed(2)}</h4>
           <CartItemCounter product={product}/>
            <button className="cart-item-remove" onClick={()=>deleteProduct(product.id)} >🗑</button>
          </div>
        ))}
    </div>
  );
};

export default Cart;