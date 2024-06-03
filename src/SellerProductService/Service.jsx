import axios from "axios";
import { Component } from "react";

const deleteProd = "http://localhost:8090/SellerProduct/deleteProduct/";

const addProd="";

class Service extends Component {
  DeleteProduct = (ProductId) => {
    return axios.delete(deleteProd + ProductId);
  };

  AddProd = (ProductId) => {
    return axios.post(addProd, ProductId);
  };
}
export default new Service();
