import React, { useEffect, useState } from "react";
import CartServicee from "../FarmerProduct/CartServicee";
import Cart from "./Cart";
import axios from "axios";
import { Link } from "react-router-dom";
import CartNavbar from "./CartNavbar";

function CartSample() {
  const [record, setRecord] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
axios.get("http://localhost:8090/findAllCart") .then((res) => {
      console.log(res.data);
      setRecord(res.data);
      calculateTotalAmount(res.data);
    });
  }, []);

  const calculateTotalAmount = (data) => {
    let total = 0;
    data.forEach((item) => {
      total += item.farmerProduct.price * item.farmerProduct.quantity;
    });
    setTotalAmount(total);
  };
  const handleRemoveItem = async (e, cartId) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`http://localhost:8090/deleteCart/${cartId}`);
      console.log("Delete response:", response);

      window.location.reload();
    } catch (error) {
      console.error("Error deleting product:", error);
    
    }
  };
  

  return (
    <div className="container py-5 mt-5">
      <CartNavbar />
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {record.map((data) => (
            <Cart
              key={data.farmerProduct.productId}
              productName={data.farmerProduct.productName}
              productPrice={data.farmerProduct.price}
              productId={data.farmerProduct.productId}
              productQuantity={data.farmerProduct.quantity}
              totalPrice={data.farmerProduct.totalPrice}
              cartId = {data.cartId}
            

            />
          ))}
        </div>
        <div className="col-lg-8 mt-5 text-center">
          <h4>Total Amount: ₹{totalAmount}</h4>
          <div className="d-flex justify-content-center">
            <Link className="btn btn-primary btn-lg mb-3" to="/combinedPayment">
              Buy Now
            </Link>
            <Link className="btn btn-outline-success btn-lg mx-3" to="/sample">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartSample;
