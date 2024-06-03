import React, { useEffect, useState } from "react";
import "../Style/Navbar.css";
import { Button } from "@mui/material";
import { Link} from "react-router-dom";
import { FaTools } from "react-icons/fa";
import Loading from "../Components/Loading";

import { MdAdminPanelSettings } from "react-icons/md";
import { TbCircleLetterG } from "react-icons/tb";
import { TbCircleLetterR } from "react-icons/tb";
import { TbCircleLetterO } from "react-icons/tb";
import { TbHexagonLetterW } from "react-icons/tb";

function AdminSellerPage() {


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

  const handleSeedsLoading =(e) =>{
    window.location.href='/seedLoading'
  }
const handleFarmerViewLoading =(e) =>{
  window.location.href='/farmerViewDetails'
}


const handleSeedsViewLoading =(e) =>{
  window.location.href='/seedViewLoading'
}
const handleToolsViewLoading =(e) =>{
window.location.href='/toolviewLoading'
}


  return (
    <nav
      class={`navbar navbar-expand-lg  fixed-top ${sticky ? "dark-nav" : ""}`}
    >
      <div class="container">
        <a id="logo" class="navbar-brand me-auto" href="#">
        <FaTools />
          
        </a>
        <br/>
        <a id="logo" class="navbar-brand me-auto" href="#">
        <TbCircleLetterG /> <TbCircleLetterR /> <TbCircleLetterO /> <TbHexagonLetterW />
          
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
                        <a id="nav-links" class="nav-link mx-lg-2 active" aria-current="page" href="adminSeller">
                          Home
                        </a>
                      </li>
                      <li class="nav-item dropdown">
                      <a id="nav-links" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          View Details
                        </a>
                        <ul class="dropdown-menu">
                        <li class="nav-item"><a  class="dropdown-item" onClick={(e)=>handleSeedsViewLoading(e)}>Seeds</a></li>
                        <li class="nav-item"><a  class="dropdown-item" onClick={(e)=>handleFarmerViewLoading(e)}>Farmer Details</a></li>
                        {/* <li class="nav-item"><a class="dropdown-item" onClick={(e)=>handleToolsViewLoading(e)}>Tools</a></li> */}
                
                      </ul>
                    </li>
                    <li class="nav-item dropdown">
                      <a id="nav-links" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Customer Details
                        </a>
                        <ul class="dropdown-menu">
                        
                        <li class="nav-item"><a  class="dropdown-item" onClick={(e)=>handleFarmerViewLoading(e)}>Farmer Details</a></li>
                        {/* <li class="nav-item"><a class="dropdown-item" onClick={(e)=>handleToolsViewLoading(e)}>Tools</a></li> */}
                
                      </ul>
                    </li>

                      <li class="nav-item dropdown">
                      <a id="nav-links" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Add Products
                      </a>
                      <ul class="dropdown-menu">
                        <li class="nav-item"><a  class="dropdown-item" onClick={(e)=>handleSeedsLoading(e)}>Seeds</a></li>
                        {/* <li class="nav-item"><a class="dropdown-item" onClick={(e)=>handleToolsLoading(e)}>Tools</a></li> */}
           
                      </ul>
                    </li>
                    <li class="nav-item">
                        {/* <a id="nav-links" class="nav-link mx-lg-2 active" aria-current="page" href="#">
                          View Customer Detials
                        </a> */}
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

export default AdminSellerPage;
