import React, {useEffect, useState } from 'react'
import "../Style/Navbar.css";
import { Button } from '@mui/material';
import { TbHexagonLetterVFilled } from "react-icons/tb";
import { TbHexagonLetterIFilled } from "react-icons/tb";
import { TbHexagonLetterNFilled } from "react-icons/tb";
import { TbCircleLetterOFilled } from "react-icons/tb";
import { GiSeedling } from "react-icons/gi";
import Loading from '../Components/Loading';

function NavbarSeedTool() {

  const handleLoading =(e) =>{
    window.location.href='/'
  }
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
            <TbHexagonLetterVFilled /><TbHexagonLetterIFilled /><TbHexagonLetterNFilled /><TbCircleLetterOFilled /> <GiSeedling />
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
                    <a id="nav-links" class="nav-link mx-lg-2 active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a id="nav-links" class="nav-link mx-lg-2 active" href="#">
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a id="nav-links" class="nav-link mx-lg-2 active" href="/seed">
                      Shopping
                    </a>
                  </li>
                  <li class="nav-item">
                    <a id="nav-links" class="nav-link mx-lg-2 active" href="#">
                    Contact
                    </a>
                  </li>
                  <li class="nav-item">
                    <a id="nav-links" class="nav-link mx-lg-2 active" href="#">
                     
                    </a>
                  </li>
                  {/* <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li>
                      <hr class="dropdown-divider"/>
                    </li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li> */}
                </ul>
                {/* <form class="d-flex mt-3" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form> */}
              </div>
            </div>
            <Button id="subs" onClick={(e)=>handleLoading(e)}>Logout</Button>
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

export default NavbarSeedTool
