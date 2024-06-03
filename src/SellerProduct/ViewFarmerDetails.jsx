import React, { useEffect, useState } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Service from "../FarmerProductService/Service";
import axios from "axios";
// import NavbarGetProduct from "./NavbarGetProduct";

export default function ViewFarmerDetails() {
  let navigate = useNavigate();

  const [Record, setRecord] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadRecord();
  }, []);

  const loadRecord = async () => {
    try {
      const response = await axios.get("http://localhost:8090/fingAllFarmer");
      setRecord(response.data);
    } catch (error) {
      console.error("Error fetching records:", error);
    }
  };

  const searchfarmer = Record.filter((pro) => {
    return (
      pro.farmerName &&
      pro.farmerName.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="container mt-5">
      {/* <NavbarGetProduct /> */}
      <div className="col-4">
        <div className="col-sm-30 mb-4 mt-2">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control"
              type="search"
              role="searchbox"
              placeholder="Enter the Farmer Name to search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                borderRadius: "5px",
                border: "1px solid #ced4da",
                padding: "0.375rem 0.75rem",
                fontSize: "1rem",
                lineHeight: "1.5",
                transition:
                  "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
                width: "100%",
                maxWidth: "500px", // Example: Set maximum width
                margin: "auto", // Example: Center the search box
              }}
            />
          </form>
        </div>
      </div>

      <div className="col-4 mt-5"></div>
      <div className="py-">
        {searchfarmer.length > 0 ? (
          <table className="table table-transparent table-striped shadow ">
            <thead>
              <tr>
                <th scope="col">Farmer Id</th>
                <th scope="col">Farmer Name</th>
                <th scope="col">Farmer Email</th>
                <th scope="col">Farmer PhoneNo</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {searchfarmer
                .filter(
                  (st) =>
                    st.farmerName.toLowerCase().includes(search) ||
                    st.farmerName.toUpperCase().includes(search)
                )
                .map((farmer, index) => (
                  <tr>
                    <th scope="row" key={index}>
                      {farmer.farmerId}
                    </th>

                    <td>{farmer.farmerName}</td>
                    <td>{farmer.email}</td>
                    <td>{farmer.phoneNo}</td>
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

        <Link className="btn btn-light m-2" to="/homePage" id="add">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-counterclockwise"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"
            />
            <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466" />
          </svg>{" "}
          Back
        </Link>
      </div>
    </div>
  );
}
