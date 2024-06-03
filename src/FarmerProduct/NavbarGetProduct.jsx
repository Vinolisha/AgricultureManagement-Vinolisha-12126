import React, { useEffect, useState } from 'react'
import "../Style/Navbar.css";
import { Button } from '@mui/material';
import { ImLeaf } from "react-icons/im";
import Loading from '../Components/Loading';

function NavbarGetProduct() {
  const handleLoading =(e) =>{
    window.location.href='/contact'
  }

  const handleAdminLoading =(e) =>{
    window.location.href='/adminloading'
  }
const handleFarmerLoading =(e) =>{
  window.location.href='/farmerloading'
}
const handleCustomerLoading =(e) =>{
  window.location.href='/bidderloading'

}
//adding code to the navbar when it change
const [sticky, setStick] =useState(false);
useEffect(() => {
  window.addEventListener('scroll', () => {
    window.scrollY > 5 ? setStick(true) : setStick(false);

  })
},[])

    return (
        <nav class={`navbar navbar-expand-lg  fixed-top ${sticky? 'dark-nav':""}`} style={{ backgroundColor: '#e9f7ef', marginTop: '10px' }} >
          <div class="container">
            <a id="logo" class="navbar-brand me-auto" href="#">
            <ImLeaf />
             Product Details
            </a>
    
            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                  Offcanvas
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                      <li class="nav-item">
                        <a id="nav-links" class="nav-link mx-lg-2 active" aria-current="page" href="/">
                          Home
                        </a>
                      </li>
                      
                    
                     
                    </ul>
                    
                  </div>
            </div>
     
          </div>
          
        </nav>
        
      );
    }

export default NavbarGetProduct
