import React, { useEffect, useState } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Service from "../FarmerProductService/Service";
import axios from "axios";
import NavbarGetProduct from "./NavbarGetProduct";

export default function GetProduct() {
  let navigate = useNavigate();

  const [Record, setRecord] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadRecord();
  }, []);

  const loadRecord = async () => {
    try {
      const response = await axios.get("http://localhost:8090/FarmerProduct/findAllProduct");
      setRecord(response.data);
    } catch (error) {
      console.error("Error fetching records:", error);
    }
  };

  const searchproduct =Record.filter((pro) => {
    return pro.productName.toLowerCase().includes(search.toLowerCase());
  })

  const removeDetails = async (e, productId) => {
    e.preventDefault();
    if (window.confirm("Are you sure?")) {
      try {
        await Service.DeleteProduct(productId);
        // Reload data after successful deletion
        loadRecord();
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    } else {
      alert("Cancelled");
    }
  };

  return (
    <div className="container" >
      {/* <NavbarGetProduct /> */}
      <div className="col-4">
        <div className="col-sm-30 mb-4 mt-2">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control"
              type="search"
              role="searchbox"
              placeholder="Enter the Product Name to search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            ></input>
          </form>
        </div>
      </div>
      
      <div className="col-4 mt-5"></div>
      <div className="py-">
      {searchproduct.length > 0 ? (
        <table className="table table-transparent table-striped shadow ">
          <thead>
            <tr>
              <th scope="col">Product Id</th>
              <th scope="col">Product Image</th>
              <th scope="col">Category</th>
              <th scope="col">Product Name</th>
              <th scope="col">Description</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
          {searchproduct
                .filter(
                  (st) =>
                    st.productName.toLowerCase().includes(search) ||
                    st.productName.toUpperCase().includes(search)
                )
                .map((product, index) => (             
                   <tr>
                <th scope="row" key={index}>
                  {product.productId}</th>
                <td><img src={`http://localhost:8090/FarmerProduct/findProdImage/${product.productId}`} width="100" height="100" alt="Product" /></td>
                <td>{product.category}</td>
                <td>{product.productName}</td>
                <td>{product.description}</td>
                <td>{product.quantity}KG</td>
                <td>{product.price}₹</td>
                <td>
                  <button className="btn btn-outline-success" onClick={(e) => removeDetails(e, product.productId)}>
                    <RiDeleteBinFill />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      ) : (
          <div className="container m-lg-5">
            <div className="col-md-10 m-lg-5 ">
              <div className="col-md-6 offset-md-3 border rounded p-2 shadow bg-light">
                <h1 className="text-center p-2">Record Not found</h1>
              </div>
            </div>
          </div>
        )}

        <Link className="btn btn-light m-2" to="/adminHomePage" id="add">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
            <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
          </svg>{" "}
          Back
        </Link>
      </div>
    </div>
  );
}
