import React from 'react'
import { useState } from "react";
import '../Style/NavbarPurchase.css';
import { Card } from "react-bootstrap";

function NavbarPurchase({size}) {
    const [cart, setCart] = useState([]);
  return (
    <nav>
        <div className="nav_box">
            <span className='my_shop'>
                My Shopping
            </span>
            <div className='cart'>
               <span>
               <i className="fas fa-shopping-cart"></i> Cart ({cart.length})
               </span>
               <span>{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default NavbarPurchase
