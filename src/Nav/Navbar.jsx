import React from 'react';
import "./Navbar.css"
import { Link , Route, Routes} from 'react-router-dom';
import Search from '../components/search/Search';
import Home from '../components/Home/Home';
import Countries from '../components/countries/Countries';
import Products from '../components/products/Products';
import CartContent from '../components/cart/CartContent';
import TotalItems from '../components/cart/TotalItems';

const Navbar = () => {
  return (
    <>  
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/carrito" element={<CartContent />} />



    </Routes>
    <nav className="navbar">
      <Link className="navbar-link" to="/">Inicio</Link>
      <Link className="navbar-link" to="/search">Search GIF</Link>
      <Link className="navbar-link" to="/countries">Rest Countries</Link>
      <Link className="navbar-link" to="/productos">Productos</Link>
      <div className='padre'>
      <Link className="navbar-link carty" to="/carrito">Carrito</Link>
      <TotalItems />
      </div>
    </nav>
    </>
  );
}

export default Navbar;