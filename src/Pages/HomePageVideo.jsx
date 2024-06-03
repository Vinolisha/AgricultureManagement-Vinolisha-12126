import React from 'react'
import videoBg from "../Pages/MicrosoftTeams-video (4).mp4"
import "../Style/VedioPlay.css";


import NavbarVegetables from '../Layout/NavbarVegetables';
export default function HomePageVideo() {
  return (
    <div className='vedioplay'>
      <div className="overlayvedio"></div>
      <video src={videoBg} autoPlay loop muted/>
      
      <div className='video-content'>
      <div class="containers d-flex align-align-items-center justify-content-center fs-1 accordion 
        text-white flex-column">
            <h1 id="smart">Sales Starts</h1>
            <h1 id="get">Get your Things</h1>
        </div>
        <NavbarVegetables/>
      </div>
    </div>
  )
}
