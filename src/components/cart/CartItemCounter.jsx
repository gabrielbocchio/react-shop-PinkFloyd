import React from 'react'
import "./CartContent.css";
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartItemCounter = ({ product}) => {
    const {buyProducts , cart, setCart} = useContext(dataContext)

    const decrease = () =>{
        const productrepeat = cart.find((item)=> item.id === product.id)

        productrepeat.quantity > 1 && 
        setCart(cart.map((item)=> item.id === product.id ? 
            {...product, quantity: productrepeat.quantity - 1} : 
            item))
    }

  return (
    <div className="containercounter">
      <p className='counter-button' onClick={decrease}>-</p>
      <p>{product.quantity}</p>
      <p className='counter-button'  onClick={() => buyProducts(product)} >+</p>
    </div>
  )
}

export default CartItemCounter
