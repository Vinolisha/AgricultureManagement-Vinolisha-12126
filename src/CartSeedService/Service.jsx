import axios from "axios";
import { Component } from "react";

const addSeeToCart="http://localhost:8090/seedCart/addSeedCart"

class CartSeedService extends Component{
 

      addSeedCart(cart){
        return axios.post(addSeeToCart, cart);
      };
}

export default new CartSeedService();