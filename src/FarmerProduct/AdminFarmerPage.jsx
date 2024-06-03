import React, { useEffect, useState } from "react";
import "../Style/Navbar.css";

import { Button } from "@mui/material";
import { Link} from "react-router-dom";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import Loading from "../Components/Loading";

function AdminFarmerPage() {


  //adding code to the navbar when it change
  const [sticky, setStick] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 5 ? setStick(true) : setStick(false);
    });
  }, []);

  const handleLoading =(e) =>{
    window.location.href='/'
  }

  const handleVegetablesLoading =(e) =>{
    window.location.href='/vegetablesLoading'
  }
const handleCustomerLoading =(e) =>{
  window.location.href='/viewCustomerDetails'
}
const handleInformationLoading =(e) =>{
  window.location.href='/informationsLoading'

}

const handleVegetablesViewLoading =(e) =>{
  window.location.href='/viewVegLoading'
}
const handleFruitsViewLoading =(e) =>{
window.location.href='/'
}
const handleInformationViewLoading =(e) =>{
window.location.href='/'

}

  return (
    
    <nav
      class={`navbar navbar-expand-lg  fixed-top ${sticky ? "dark-nav" : ""}`}
    >

      <div class="container">
        <a id="logo" class="navbar-brand me-auto" href="#">
          <FaCanadianMapleLeaf />
          Crops Management System
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
                        <a id="nav-links" class="nav-link mx-lg-2 active" aria-current="page" href="/adminHomePage">
                          Home
                        </a>
                      </li>
                      <li class="nav-item dropdown">
                      <a id="nav-links" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          View Details
                        </a>
                        <ul class="dropdown-menu">
                        <li class="nav-item"><a  class="dropdown-item" onClick={(e)=>handleVegetablesViewLoading(e)}>Vegetables</a></li>
                        <li class="nav-item"><a class="dropdown-item" onClick={(e)=>handleCustomerLoading(e)}>Customer Details</a></li>
                        
                       
                        
                      </ul>
                    </li>
                    <li class="nav-item dropdown">
                      <a id="nav-links" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Add Products
                      </a>
                      <ul class="dropdown-menu">
                        <li class="nav-item"><a  class="dropdown-item" onClick={(e)=>handleVegetablesLoading(e)}>Vegetables</a></li>
                        

                       
                        
                      </ul>
                    </li>
                      <li class="nav-item">
                        <a id="nav-links" class="nav-link mx-lg-2 active" href="/homePageShopping">
                        Buy Product
                        </a>
                      </li>
                      <li class="nav-item">
                        <a id="nav-links" class="nav-link mx-lg-2 active"href="/" >
                          About Us
                        </a>
                      </li>
                    
                     
                    </ul>
                    
                  </div>
            </div>
          

        <Button id="subs" onClick={(e) => handleLoading(e)}>
          Logout
        </Button>
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

export default AdminFarmerPage;
