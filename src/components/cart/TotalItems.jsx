import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const TotalItems = () => {
    const { cart , setCart} = useContext(dataContext);

    const itemsQuantity = cart.reduce((acumulador, elemento)=> acumulador + elemento.quantity, 0)
  return (
    <div>
      <span className="item-quantity-counter">{itemsQuantity}</span>
    </div>
  )
}

export default TotalItems
