import React, { Component } from 'react'
import AdminSellerPage from './AdminSellerPage'
import { FaArrowAltCircleRight } from "react-icons/fa";
import "../Style/HomePage.css";

export class HomePage extends Component {
  render() {
    return (
      <div>
<AdminSellerPage/>
        <section class="hero-section">
       
        <div className='hero-textbox'>
          <h1 id="text">We Ensure better Agriculture for a better world</h1>
          <p id="text1">Our cutting-edge curriculum is designed to empower farmers with the knowledge, skills, and experiences needed to excel in the dynamic field of agriculture</p>
          <button className='Explorebtn'>Explore more <FaArrowAltCircleRight /> </button>
        </div>
      </section>  
      </div>
    )
  }
}

export default HomePage
