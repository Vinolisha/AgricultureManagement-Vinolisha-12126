import React, { useEffect, useState } from 'react';
import "../Style/Navbar.css";
import { Button } from '@mui/material';
import Loading from '../Components/Loading';
import { FaCartArrowDown } from "react-icons/fa";

function SampleNavbar() {
  const handleLoading = (e) => {
    window.location.href = '/';
  }

  const handleCustomerLoading = (e) => {
    window.location.href = '/';
  }

  const [sticky, setStick] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 5 ? setStick(true) : setStick(false);
    })
  }, [])

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${sticky ? 'sticky' : ''}`} style={{ backgroundColor: '#e9f7ef', marginTop: '10px' }}>
      <div className="container">
        <a id="logo" className="navbar-brand me-auto" href="cartSample">
          <FaCartArrowDown />
        </a>

        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li className="nav-item">
                <a id="nav-links" className="nav-link mx-lg-2 active" aria-current="page" href="/vedio">Home</a>
              </li>
              <li className="nav-item">
                <a id="nav-links" className="nav-link mx-lg-2 active" href="/sample">Shopping</a>
              </li>
            </ul>
          </div>
        </div>
        <Button id="subs" onClick={(e) => handleLoading(e)}>Logout</Button>
        <button className="navbar-toggler pe-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default SampleNavbar;
