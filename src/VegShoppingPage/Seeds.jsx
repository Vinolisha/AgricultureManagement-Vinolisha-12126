

import React from "react";
import "../Style/Vegetables.css";
import "../Style/Scripts.js";
import seedss from "./seeds.jpg";
import tool from "./tool.jpg";
import seeds from "./seed1.jpg";
import seed1 from "./tools.jpg";
import seed from "./seedhome.jpg"
import NavbarVegetables from "../Layout/NavbarVegetables";

function Seeds() {
  return (
    <div className="banner">
      <NavbarVegetables/>

      <section class="home" id="">
        <div class="imageSeed">
          <img
            style={{
              width: "60%",
              height: "590px",
              objectFit: "cover",
              borderRadius: "500px"
            }}
            src={seed} alt=""
          />
        </div>

        <div class="content">
          <span>healtheist Seeds</span>
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
              borderRadius: "10px",
              
            }}
            src={seedss} alt=""
          />
          <div class="content">
            <h3 id="offers">Healthy Seeds</h3>
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
            src={tool} alt=""
          />
          <div class="content">
            <h3 id="offers">Quality Tools</h3>
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
        <h3 id="veg">Seeds</h3>
        <p id="offer">upto 50% offer</p>
        <img src={seeds} alt="" />
        <a href="/sampleSeed" class="btnns">
          shop now
        </a>
      </div>

      
      <div class="box">
        <h3 id="veg">Tools</h3>
        <p id="offer">upto 50% offer</p>
        <img src={seed1} alt="" />
        <a href="/" class="btnns">
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

export default Seeds;
