import React, { useState } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import axios from "axios";
import AdminFarmerPage from "./AdminFarmerPage";

function FarProductForm() {
  let navigate = useNavigate();
  const [productData, setProductData] = useState({
    productId: "",
    productName: "",
    category: "",
    description: "",
    quantity: "",
    price: "",
    imageProduct: null, // Initially set to null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setProductData({
      ...productData,
      imageProduct: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("productName", productData.productName);
      formData.append("category", productData.category);
      formData.append("description", productData.description);
      formData.append("quantity", productData.quantity);
      formData.append("price", productData.price);
      formData.append("imageProduct", productData.imageProduct);

      console.log("Product data:", productData);
      console.log("Form data:", formData);

      const response = await axios.post(
        "http://localhost:8090/FarmerProduct/insertFarmerProduct",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Server response:", response.data);

      alert("Product added successfully:", response.data);
      navigate("/getProduct");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-5 offset-md-3 border rounded p-3 mt-6 shadow ">
          <h4 className="text-center m-2">ADD PRODUCT DETAILS</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label float-start ">
                <b>Product Name</b>
              </label>
              <input
                type="text"
                id="productName"
                name="productName"
                className="form-control"
                value={productData.productName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Name" className="form-label float-start ">
                Category:
              </label>
              <input
                type="text"
                id="category"
                name="category"
                className="form-control"
                value={productData.category}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label float-start ">
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                className="form-control"
                value={productData.description}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label float-start ">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                className="form-control"
                value={productData.quantity}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label float-start ">
                Price:
              </label>
              <input
                type="number"
                id="price"
                name="price"
                className="form-control"
                value={productData.price}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label float-start ">
                Image:
              </label>
              <input
                type="file"
                id="imageProduct"
                name="imageProduct"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
            </div>

            <button
              type="submit"
              data-testid="login-submit"
              className="btn btn-success"
              id="submit"
            >
              Submit
            </button>

            <Link className="btn btn-outline-dark mx-2" to="/adminFarmer">
              <svg
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-counterclockwise"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"
                />
                <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466" />
              </svg>{" "}
              Go-Back
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FarProductForm;
