import { createContext , useState, useEffect} from "react"
import axios from 'axios'

export const dataContext = createContext()

const DataProvider = ({children}) =>{
    const [data, setData] = useState([])
    const [cart, setCart] = useState([])

    useEffect(()=>{
    axios("products.json").then((res)=> setData(res.data))
    }, [])

    const buyProducts = (product) => {
        //si el produ ya esta pushiado no pushiarlo de nuevo, aumentarle la quantity
          const productrepeat = cart.find((item)=> item.id === product.id)
  
          if(productrepeat){
            setCart(cart.map((item)=> item.id === product.id ? {...product, quantity: productrepeat.quantity +1} : item))
          }else{
            //basico para carrito
            setCart([...cart, product])
  
          }
  
      };
    return(
        <dataContext.Provider
        value={{data, cart, setCart, buyProducts}}
        >
            {children}
        </dataContext.Provider>
    )
}

export default DataProvider