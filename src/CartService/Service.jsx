import axios from "axios";
import { Component } from "react";

const addToCart="http://localhost:8090/addCart";
const addSeeToCart="http://localhost:8090/addSeedCart";

class CartService extends Component{
  
    addCart(cart){
        return axios.post(addToCart, cart);
      };

      addSeedCart(cart){
        return axios.post(addSeeToCart, cart);
      };
}

export default new CartService();