import React, { useState } from "react";
import "../Style/Login.css";
import Swal from 'sweetalert2'
import TextField from "@mui/material/TextField";
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Service from "../LoginService/Service";

function LoginPage() {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) =>!show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  let navigate = useNavigate();
  const [Record, setRecord] = React.useState({
    email: "",
    password: "",
  });
  const { email, password } = Record;//customer
  const onInputChange = (e) => {
    setRecord({...Record, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Service.Login(Record);
      const customerId = response.data.customerId; // Assuming 'customerId' is a part of the response
      // sessionStorage.setItem("email", email);
      // sessionStorage.setItem("customerId", customerId);
     
      sessionStorage.setItem("customerId",customerId)
      navigate(`/vedio`);
    } catch (error) {
      alert("Sorry!!! Email or Password is not matched");
    }

    window.location.reload();
  };
  return (
    <div>
      <div className="container mt-5" id="containers">
        <div className="form-container sign-in-container">
          <form id="forms" action="#" onSubmit={(e) => onSubmit(e)}>
            
            <h1 id="signin"> Customer Sign In</h1>
            <div className="social-container">
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <MdEmail />
              </span>
              <TextField
                id="outline"
                label="Email"
                type="email"
                autoComplete="outlined"
                name="email"
                value={email}
                onChange={onInputChange}
                required
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <FaKey />
              </span>
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password*
                </InputLabel>
                <OutlinedInput
                  id="outlined-basics"
                  type={showPassword? "text" : "password"}
                  
                  
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  value={password}
                  name="password"
                  onChange={onInputChange}
                />
              </FormControl>
            </div>
            <a id="forgot" href="/forgotpassword">
              Forgot your password?
            </a>
            <button id="sub" type="submit">
              Sign In
            </button>
            <div id="account">
            <p>Don't have an account?<a  href="/registerCustomer"> Register</a></p>
            </div>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1 id="welcome">Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              
              <img
                src="https://www.shutterstock.com/image-photo/farming-portrait-group-women-greenhouse-600nw-2353782961.jpg"
                style={{ width: "385px", height: "700px" }}
                
              />
              {/* <button className="ghost" id="signUp">Sign In</button> */}
            </div>
          </div>
        </div>
      </div>
      {/* <footer>
        <p>
          Created with <i class="fa fa-heart"></i> by
          <a target="_blank" href="https://florin-pop.com">
          </a>- Alternatively called a sign in, a login or logon is a
          set of credentials used to access an area requiring proper
          authorization.
          <a
            target="_blank"
            href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/"
          >
           
          </a>
          
        </p>
      </footer> */}
    </div>
  );
}

export default LoginPage;