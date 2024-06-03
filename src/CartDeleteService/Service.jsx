import axios from "axios";
import { Component } from "react";

const deleteCart = "http://localhost:8090/deleteCart/";


class Service extends Component {
  DeleteCart = (ProductId) => {
    return axios.delete(deleteCart + ProductId);
  };


}
export default new Service