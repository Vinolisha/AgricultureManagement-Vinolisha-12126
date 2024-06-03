import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SeedsCart() {
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleRemoveItem = () => {
    // Handle logic to remove the item from the cart
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "" }}>
      <div className="container h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col">
            <p>
              <span className="h2">Shopping Cart </span>
             
            </p>

            <div className="card mb-4">
              <div className="card-body p-4">
                <div className="row align-items-center">
                  <div className="col-md-2">
                    <img
                      className="img-fluid"
                      src="https://foxfarm.com/wp-content/uploads/2022/05/landing-page_1564791433.jpg"
                      alt="Generic placeholder image"
                    />
                  </div>
                  <div className="col-md-2 d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Vegetable Name</p>
                      <p className="lead fw-normal mb-0">Tomato</p>
                    </div>
                  </div>
                  <div className="col-md-2 d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Quantity</p>
                      <div className="d-flex align-items-center">
                        <button
                          onClick={handleDecreaseQuantity}
                          className="btn btn-light"
                        >
                          -
                        </button>
                        <p className="lead fw-normal mb-0 mx-2">{quantity}</p>
                        <button
                          onClick={handleIncreaseQuantity}
                          className="btn btn-light"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Price</p>
                      <p className="lead fw-normal mb-0">$799</p>
                    </div>
                  </div>
                  <div className="col-md-2 d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Total</p>
                      <p className="lead fw-normal mb-0">${799 * quantity}</p>
                    </div>
                  </div>
                  <div className="col-md-2 d-flex justify-content-center">
                    <button
                      onClick={handleRemoveItem}
                      className="btn btn-danger"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-5">
              <div className="card-body p-4">
                <div className="float-end">
                  <p className="  d-flex align-items-center">
                    <span className="small text-muted me-2">Order total:</span>
                    <span className="lead fw-normal">${799 * quantity}</span>
                  </p>
                  
                    <Link className="btn btn-outline-primary" to="/buyNow">
                      Buy Now
                    </Link>
                  
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center px-4">
              <div className="me-4">
                <Link className="btn btn-outline-success" to="/addingProducts">
                  Continue shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
