import React from "react";
import "../Style/About.css";
import program4 from "./management1.jpg";

import { FaPlay } from "react-icons/fa";

const About = () => {
  return (
    <div className="about">
      <div className="about-Left">
        <img src={program4} alt="" className="about-img" />
      </div>
      
      <div className="about-right">
        <h3>ABOUT OUR MANAGEMENT</h3>
        <h2>
          The sole purpose of Agriculture Tele-Consultation service is to
          provide quick and best advisory services to the farmers in their
          regional language
        </h2>
       
        <p>
          Agriculture forms the backbone of our economy as it act as a source of
          livelihood for a large section of our population. Farmers form the
          basic unit of the agricultural community in India. Indian farmers have
          a deep knowledge on agriculture practices and techniques given by
          their ancestors. However these days many improved practices and
          techniques of agriculture are gaining popularity. But the major
          problems arises when it comes to dissemination of these technologies.
          The root cause behind this is lack of awareness, trainings and
          education. This results in exploitation farmers at various levels. To
          help farmers solve such issues, Common Service Centre offers a very
          unique platform where farmers can avail advisory services by video
          conferencing from qualified Agriculture Scientists of the Krishi
          Vigyan Kendras (KVK). 
        </p>
      </div>
    </div>
  );
};

export default About;
