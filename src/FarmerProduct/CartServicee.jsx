import axios from "axios";
import { Component } from "react";

const addToCart="http://localhost:8090/addCart";
const findAll="http://localhost:8090/findAllCart";
const seedCartFindAll = "http://localhost:8090/seedCart/findAllCart";
class CartServicee extends Component{
    addCart(cart){
        return axios.post(addToCart, cart);
      };

      findAll(cart){
        return
         axios.get(findAll)
      }

      doSeedCartFindAll(){
        return axios.get(seedCartFindAll)
      }
}

export default new CartServicee();