import React, { useEffect, useState } from "react";
import CartServicee from "../FarmerProduct/CartServicee";
import SeedCart from "./SeedCart";
import { Link } from "react-router-dom";
import CartNavbar from "./CartNavbar";
import axios from 'axios'; // Import axios

function SeedCartSample() {
  const [record, setRecord] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    CartServicee.doSeedCartFindAll().then((res) => {
      console.log(res.data);
      setRecord(res.data);
      calculateTotalAmount(res.data);
    });
  }, []);

  const calculateTotalAmount = (data) => {
    let total = 0;
    data.forEach((item) => {
      total += item.sellerProduct.price * item.quantity;
    });
    setTotalAmount(total);
  };

  const handleRemoveItem = async (e, cartId) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`http://localhost:8090/seedCart/deleteCart/${cartId}`);
      console.log("Delete response:", response);
      // Update record after successful deletion
      // setRecord(prevRecord => prevRecord.filter(item => item.sellerProduct.productId !== cartId));
      // Recalculate total amount after deletion
      // calculateTotalAmount(prevRecord.filter(item => item.sellerProduct.productId !== cartId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="container py-5 mt-5">
      <CartNavbar/>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {record.map((data) => (
            <SeedCart
            cartId = {data.cartId}
              key={data.sellerProduct.productId}
              productName={data.sellerProduct.productName}
              productPrice={data.sellerProduct.price}
              productId={data.sellerProduct.productId}
              productQuantity={data.quantity}
              totalPrice={data.totalPrice}
              handleRemoveItem={(e) => handleRemoveItem(e, data.sellerProduct.productId)}
            />
          ))}
        </div>
        <div className="col-lg-8 mt-5 text-center ">
          <h4>Total Amount: ₹{totalAmount}</h4>
          <div className="d-flex justify-content-center">
            <Link
              className="btn btn-primary btn-lg mb-3"
              to="/combinedPayment"
            >
              Buy Now
            </Link>
            <Link className="btn btn-outline-success btn-lg" to="/sampleSeedShoping">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeedCartSample;
