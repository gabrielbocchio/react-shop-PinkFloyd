import React from 'react';
import "./Navbar.css"
import { Link , Route, Routes} from 'react-router-dom';
import Info from '../components/info/Info';
import Home from '../components/Home/Home';
import Products from '../components/products/Products';
import CartContent from '../components/cart/CartContent';
import TotalItems from '../components/cart/TotalItems';

const Navbar = () => {
  return (
    <>  
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/carrito" element={<CartContent />} />



    </Routes>
    <nav className="navbar">
      <Link className="navbar-link" to="/">Home</Link>
      <Link className="navbar-link" to="/info">Info</Link>
      <Link className="navbar-link" to="/productos">Products</Link>
      <div className='padre'>
      <Link className="navbar-link carty" to="/carrito">Cart</Link>
      <TotalItems />
      </div>
    </nav>
    </>
  );
}

export default Navbar;