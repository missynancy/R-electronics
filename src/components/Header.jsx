// src/components/Header.js
import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../pages/cart/CartDetails';
import "./Navbar.css";

export const Header = () => {
  const [sideOpen, setSideOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cart } = useContext(CartContext);

  return (
    <nav>
      <div className="nav2">
        <div className='menu2' onClick={() => setSideOpen(!sideOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={sideOpen ? "open" : ""}>
          <li>
            <NavLink to='/phones'>Phones<i className='bx bx-chevron-right'></i></NavLink>
            <NavLink to='/lp'>Laptops <i className='bx bx-chevron-right'></i></NavLink>
            <NavLink to='/dp'>Desktops<i className='bx bx-chevron-right'></i></NavLink>
            <NavLink to='/mt'>Monitors<i className='bx bx-chevron-right'></i></NavLink>
            <NavLink to='/up'>UPS/Power backup<i className='bx bx-chevron-right'></i></NavLink>
            <NavLink to='/ca'>Computer Accessories<i className='bx bx-chevron-right'></i></NavLink>
            <NavLink to='/pa'>Phone Accessories<i className='bx bx-chevron-right'></i></NavLink>
            <NavLink to='/tv'>TV & Entertainment <i className='bx bx-chevron-right'></i></NavLink>
            <NavLink to='/pcc'>Printers, Scanners & Copiers<i className='bx bx-chevron-right'></i></NavLink>
            </li>
        </ul>
        <div className="categories">
                    <li>
                        <NavLink to='/phones'>Phones</NavLink>
                        <NavLink to='/lp'>Laptops</NavLink>
                        <NavLink to='/dp'>Desktops</NavLink>
                        <NavLink to='/mt'>Monitors</NavLink>
                        <NavLink to='/up'>UPS/Power backup</NavLink>
                        <NavLink to='/ca'>Computer Accessories</NavLink>
                        <NavLink to='/pa'>Phone Accessories</NavLink>
                        <NavLink to='/tv'>TV & Entertainment</NavLink>
                        <NavLink to='/pcc'>Printers, Scanners & Copiers</NavLink>
                    </li>
                </div>
        <div className={cartOpen ? "open" : ""} id='cart'>
          <div className="carticon">
            <NavLink 
              to="/cart"
                onClick={() => {
                  setCartOpen(!cartOpen);
                }}
              >
                <i className='bx bx-cart-add'></i>
                <span className='cartSpan'>{cart.length}</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
