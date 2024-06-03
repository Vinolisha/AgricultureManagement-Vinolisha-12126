

import React from "react";
import "../Style/Vegetables.css";
import Navbars from "../Layout/Navbars";
import "../Style/Scripts.js";
import vegetables from "./vegetables.jpg";
import fruits from "./bundlefruits.jpg";
import tomato from "./vegetables4.jpg";
import fruit from "./fruits.jpg";
import vege1 from "./InShot_20231230_231303938.jpg"
import NavbarVegetables from "../Layout/NavbarVegetables";

function Vegetables() {
  return (
    <div className="banner">
      <NavbarVegetables/>

      <section class="home" id="">
        <div class="image">
          <img
            style={{
              width: "50%",
              height: "700px",
              objectFit: "cover",
              borderRadius: "5px"
            }}
            src={vege1} alt=""
          />
        </div>

        <div class="content">
          <span>natural and organic</span>
          <h3 id="letter">your daily need products</h3>
          <a href="#" class="btnns">
            sales started
          </a>
        </div>
      </section>

      {/* <!-- home section ends --> */}

      {/* <!-- banner section starts --> */}

      <section class="banner-container">
        <div class="banner">
          <img
            style={{
              width: "100%",
              height: "500px",
              objectFit: "cover",
              borderRadius: "10px"
            }}
            src={vegetables} alt=""
          />
          <div class="content">
            <h3 id="offers">Healthy Vegetables</h3>
            <p id="offer">upto 50% offer</p>
          </div>
        </div>

        <div class="banner">
          <img
            style={{
              width: "100%",
              height: "500px",
              objectFit: "cover",
              borderRadius: "10px"
            }}
            src={fruits} alt=""
          />
          <div class="content">
            <h3 id="offers">Healthy Fruits</h3>
            <p id="offer">upto 60% offer</p>
           
          </div>
        </div>
      </section>

      {/* <!-- banner section ends --> */}

      {/* <!-- category section starts --> */}

      
  <section class="category" id="category">
    <h1 class="heading">
      shop by <span>category</span>
    </h1>

    <div class="box-container">
      <div class="box">
        <h3 id="veg">Vegitables</h3>
        <p id="offer">upto 50% offer</p>
        <img src={tomato} alt="" />
        <a href="/sample" class="btnns">
          shop now
        </a>
      </div>

      
      <div class="box">
        <h3 id="veg">fruits</h3>
        <p id="offer">upto 50% offer</p>
        <img src={fruit} alt="" />
        <a href="/addingFruits" class="btnns">
          shop now
        </a>
          </div>
        </div>
      </section>

      {/* <!-- category section ends --> */}

      {/* <!-- product section starts --> */}
    </div>
  );
}

export default Vegetables;
