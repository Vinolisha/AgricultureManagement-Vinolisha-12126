import axios from "axios";
import { Component } from "react";

const deleteProd = "http://localhost:8090/FarmerProduct/deleteProduct/";

const addProd="http://localhost:8090/FarmerProduct/insertFarmerProduct";

class Service extends Component {
  DeleteProduct = (ProductId) => {
    return axios.delete(deleteProd + ProductId);
  };

  AddProd = (ProductId) => {
    return axios.post(addProd, ProductId);
  };
}
export default new Service();
