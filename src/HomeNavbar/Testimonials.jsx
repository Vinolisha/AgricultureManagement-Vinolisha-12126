import React from "react";
import program6 from "./organicveg.jpg";
import p from "./fertilize.jpg";
import "../Style/Testimonials.css";
import Navbars from "../Layout/Navbars";

function Testimonials() {
  return (
    
    <div className="testimonials">
      <div className="slider">
        <ul>
          <li>
            <div className="information">
              <div className="userinfo">
                <img src={program6} alt="" />
                <div>
                  <h3>Organic Forming</h3>
                </div>
              </div>
              <p>
                Now a days we keep hearing about organic products and such
                products are gaining huge popularity all over the world. Young
                farmers now a days take deep interest in learning practices and
                principles of Organic farming. However sometimes due to language
                barrier or sometimes due geographical barriers are unable to do
                so. On our platform we have scientist from KVKs across all
                states of India. Therefore farmers can receive advisory in their
                local language.
              </p>
            </div>
          </li>
          <li>
            <div className="information">
              <div className="userinfor">
                <img src={p} alt="" />
                <div>
                  <h3>Fertilizer and Soil Management</h3>
                </div>
              </div>
              <p>
                Soil forms the basic unit of crop production. The use of
                inorganic fertilizers if done in a balanced manner can results
                in enhanced production and productivity of the crops. The inorganic
                fertilizer such as urea, DAP are leading available sources
                of nitrogen, phosphorus and potassium. If they are used in a
                balanced manner they can also result in cost cutting. On our
                platform we have on boarded Soil Scientists who can guide
                farmers for better soil and fertilizer management of their field.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    
  );
} 

export default Testimonials;
