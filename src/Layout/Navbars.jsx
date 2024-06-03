import React, { useEffect, useState } from 'react'
import "../Style/Navbar.css";
import { Button } from '@mui/material';
import { ImLeaf } from "react-icons/im";
import Loading from '../Components/Loading';

function Navbars() {
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
        <nav class={`navbar navbar-expand-lg  fixed-top ${sticky? 'dark-nav':""}`}>
          <div class="container">
            <a id="logo" class="navbar-brand me-auto" href="#">
            <ImLeaf />
             Agriculture Management System
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
                      <li class="nav-item">
                        <a id="nav-links" class="nav-link mx-lg-2 active" href="/program">
                          Program
                        </a>
                      </li>
                      <li class="nav-item">
                        <a id="nav-links" class="nav-link mx-lg-2 active" href="/about">
                         About Us
                        </a>
                      </li>
                      <li class="nav-item">
                        <a id="nav-links" class="nav-link mx-lg-2 active"href="/testimonial" >
                          Testimonial
                        </a>
                      </li>
                    
                      <li class="nav-item dropdown">
                      <a id="nav-links" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        LogIn
                      </a>
                      <ul class="dropdown-menu">
                        <li class="nav-item"><a  class="dropdown-item" onClick={(e)=>handleAdminLoading(e)}>Seller</a></li>
                        <li class="nav-item"><a class="dropdown-item" onClick={(e)=>handleFarmerLoading(e)}>Farmer</a></li>
                        <li class="nav-item"><a  class="dropdown-item" onClick={(e)=>handleCustomerLoading(e)}>Customer</a></li>
                       
                        
                      </ul>
                    </li>
                    </ul>
                    
                  </div>
            </div>
            <Button id="subs" onClick={(e)=>handleLoading(e)}>Contact</Button>
            <button
              class="navbar-toggler pe-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          
        </nav>
        
      );
    }

export default Navbars
