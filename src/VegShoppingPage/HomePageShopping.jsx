import React from 'react'
import videoSeed from "../VegShoppingPage/MicrosoftTeams-video (9).mp4"
import "../Style/VedioPlay.css";
import { GiSeedling } from "react-icons/gi";

import NavbarSeedTool from './NavbarSeedTool';
export default function HomePageShopping() {
  return (
    <div className='vedioplay'>
      <div className="overlayvedio"></div>
      <video src={videoSeed} autoPlay loop muted/>
      
      <div className='video-content'>
      <div class="containers d-flex align-align-items-center justify-content-center fs-1 accordion 
        text-white flex-column">
            <h1 id="smart">Sales Starts</h1>
            
            <h1 id="get">Get your Things <GiSeedling /></h1>
        </div>
        <NavbarSeedTool/>
      </div>
    </div>
  )
}
