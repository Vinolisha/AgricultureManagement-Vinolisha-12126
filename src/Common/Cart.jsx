import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Cart(props) {
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 0));
  };

  const handleRemoveItem = async (cartId) => {

   console.log(cartId)
    const id = parseInt(cartId)
   axios.delete("http://localhost:8090/deleteCart/"+id).then((response)=>{
alert("Item deleted successfully")
window.location.reload();
   }).catch((err)=>alert("Item not able to delete"))
  };

  return (
    <section className="vh-80 mt-5" style={{ backgroundColor: "#e9f7ef" }}>
      <div className="container">
        <div className="row">
          <div className="col">
            {/* <h2 className="mb-4">Shopping Cart</h2> */}
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={"http://localhost:8090/FarmerProduct/findProdImage/" +
                    props.productId}
                    alt="Product"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-8" >
                  <div className="card-body">
                    <h5 className="card-title">{props.productName}</h5>
                    <p className="card-text">Quantity: {quantity}</p>
                    <div className="btn-group" role="group">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleDecreaseQuantity}
                      >
                        -
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary disabled"
                      >
                        {quantity}
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleIncreaseQuantity}
                      >
                        +
                      </button>
                    </div>
                    <p className="card-text">
                      Price: ₹{props.productPrice} | Total: ₹
                      {props.productPrice * quantity}
                    </p>
                    <button
                     onClick={e => handleRemoveItem(props.cartId)}
                     className="btn btn-danger"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
