import React from "react";
import videoBg from "../Pages/MicrosoftTeams-video (8).mp4";
import "../Style/HomeSection.css";
import Navbars from "../Layout/Navbars";
import { FaArrowDownLong } from "react-icons/fa6";
import "../Style/VedioPlay.css";
import Programs from "./Programs";
import Title from "./Title";
import About from "./About";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

function HeroSections() {
  return (
    <div className="vedioplay">

      <video src={videoBg} autoPlay loop muted />

      <div className="video-content">
        
          <section class="hero-sections">
      
            <div className="hero-text">
              <h1 id="text">We Ensure better Agriculture for a better world</h1>
              <p id="text1">
                Our cutting-edge curriculum is designed to empower farmers with
                the knowledge, skills, and experiences needed to excel in the
                dynamic field of agriculture
              </p>
              <button className="Explorebtn">
                Explore more <FaArrowDownLong />{" "}
              </button>
            </div>
          </section>
        </div>
        <Navbars />
      

      <div className="container">
        <Title subTitle="OUR MANAGEMENT" title="What we offer" />
        <Programs />
        <About />
        <Title subTitle="OUR SERVICE LIST" title="What were offering" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
      </div>
    </div>
  );
}

export default HeroSections;
