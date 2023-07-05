import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./Products.css"


const Products = () => {
    const { data, buyProducts } = useContext(dataContext);


    return (
        <>
        <h1 className='titulo'>Discografia de Pink Floyd</h1>
        <div className="products-container">
        {data.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price}</p>
              <button className="buy-button" onClick={() => buyProducts(product)}>
                <span className="buy-icon">&#128722;</span> Comprar
              </button>
            </div>
          </div>
        ))}
      </div>
      </>
    );
  };
  
  export default Products;