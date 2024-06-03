import React from "react";

import program1 from "./organic forming.jpg";
import program2 from "./disease.jpg";
import program3 from "./farming.jpg";
import "../Style/Programs.css";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program1} alt="" />
        <div className="caption">
          <p>Organic Farming</p>
        </div>
      </div>
      <div className="program">
        <img src={program2} alt="" />
        <div className="caption">
          <p>Disease/Pest Management Advisory</p>
        </div>
      </div>
      <div className="program">
        <img src={program3} alt="" />
        <div className="caption">
          <p>Fertilizer and Soil Management</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
