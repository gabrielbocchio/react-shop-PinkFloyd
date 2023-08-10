import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./CartContent"

const CartTotal = () => {
    const {cart} = useContext(dataContext)
    const total = cart.reduce((acumulador, elemento)=> acumulador+elemento.price * elemento.quantity, 0).toFixed(2);
  return (
    <div className="cartTotal">
        <h3>Total to pay: $ {total} </h3>  <button className="paypal-button">Go To PayPal</button>
    </div>
  )
}

export default CartTotal
