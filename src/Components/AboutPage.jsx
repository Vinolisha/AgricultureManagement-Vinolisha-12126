import React from "react";

const AboutPage = () => {
  return (
    <div className="container">
      <h1>About Us</h1>
      <p>
        We are a team of farmers, technologists, and innovators passionate about
        empowering the agricultural community. Our mission is to provide a
        platform that connects farmers, suppliers, and buyers, making it easier
        to grow, produce, and distribute fresh produce.
      </p>
      <h3>Our Vision</h3>

      <p>
        We envision a future where farmers have access to the resources they
        need to thrive, and consumers have access to fresh, healthy, and
        sustainable food. We believe that by leveraging technology and
        collaboration, we can create a more efficient, transparent, and
        equitable food system.
      </p>
      <h3>Our Values</h3>
      <p>
        <strong>Sustainability</strong>: We believe in promoting environmentally
        friendly farming practices that preserve our planet's natural resources.
        <br></br>
        <strong>Community</strong>: We are committed to building a community
        that supports and empowers farmers, suppliers, and buyers.
        <br></br>
        <strong>Innovation</strong>: We strive to leverage technology and
        innovation to improve the agricultural industry.<br></br>
        <strong>Transparency</strong>: We believe in promoting transparency
        throughout the supply chain, from farm to table.
      </p>
      <div className="row">
        <div className="col-md-4">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/013/124/768/original/colorful-assortment-of-organized-fruits-and-vegetables-at-market-stand-free-video.jpg"
            className="img-fluid"
            style={{ width: "300px", height: "200px" }}
          />
          <h5>The fields of our farmers.</h5>
        </div>
        <div className="col-md-4">
          <img
            src="https://images.pexels.com/photos/5247/field-agriculture-farm-grass.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="img-fluid"
            style={{ width: "300px", height: "200px" }}
          />
          <h5>The view of the fields.</h5>
        </div>
        <div className="col-md-4">
          <img
            src="https://images.pexels.com/photos/6216870/pexels-photo-6216870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="img-fluid"
            style={{ width: "300px", height: "200px" }}
          />
          <h5>The outcome products for market.</h5>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
