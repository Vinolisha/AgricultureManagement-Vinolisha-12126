import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SeedCart(props) {
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
   axios.delete("http://localhost:8090/seedCart/deleteCart/"+id).then((response)=>{
alert("Item deleted successfully")
window.location.reload()
   }).catch((err)=>alert("Item not able to delete"))
  };

  const subTotal = props.productPrice * quantity;

  return (
    <section className="vh-80 mt-5" style={{ backgroundColor: "#e9f7ef" }}>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={"http://localhost:8090/SellerProduct/findProdImage/" + props.productId}
                    alt="Product"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-8">
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
                      Price: ₹{props.productPrice} | Total: ₹{subTotal}
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
