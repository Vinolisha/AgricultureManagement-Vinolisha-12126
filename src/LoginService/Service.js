
import React from "react";
import axios from "axios";
import { Component } from "react";

const addCustomer="http://localhost:8090/registerCustomer";
const loginCustomer="http://localhost:8090/loginCustomer";

const addFarmer="http://localhost:8090/registerFarmer";
const loginFarmer="http://localhost:8090/loginFarmer";

const addSeller="http://localhost:8090/registerSeller";
const loginSeller="http://localhost:8090/loginSeller";


class Service extends Component {
Register = (customer)=>{
    return axios.post(addCustomer, customer);
};

Login = (customer)=>{
    return axios.post(loginCustomer, customer);
}

Registerfarmer = (farmer)=>{
    return axios.post(addFarmer, farmer);
};

Loginfarmer = (farmer)=>{
    return axios.post(loginFarmer, farmer);
}

RegisterSeller = (seller)=>{
    return axios.post(addSeller, seller);
};

LoginSeller = (seller)=>{
    return axios.post(loginSeller, seller);
}



}

export default new Service();