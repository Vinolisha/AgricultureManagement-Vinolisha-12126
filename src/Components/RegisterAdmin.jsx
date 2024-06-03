import React, { useState } from "react";
import "../Style/Login.css";
import { IoMdPersonAdd } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaKey } from "react-icons/fa";
import TextField from "@mui/material/TextField";
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

function RegisterAdmin() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [Record, setRecord] = React.useState({
    sellerId: "",
    sellerName: "",
    email: "",
    phoneNo: "",
    password: "",
  });
  const { sellerId, sellerName, email, phoneNo, password } = Record;
  const onInputChange = (e) => {
    setRecord({ ...Record, [e.target.name]: e.target.value });
  };

  let navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await Service.RegisterSeller(Record);
      
      navigate("/adminLogin");
    } catch (error) {
      alert(
        "Email is already existed!!! please use another email!! " +
          Record.sellerName
      );
    }
    window.location.reload();
  };
  return (
    <div className="back">
      <div className="container mt-lg-5 " id="containers">
        <div className="form-container sign-in-container">
          <form id="forms" action="#" onSubmit={(e) => onSubmit(e)}>
            <h1 id="signin"> Seller Sign In</h1>
            <div className="social-container"></div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <IoMdPersonAdd />
              </span>
              <TextField
                id="outline"
                label="Name"
                type="text"
                autoComplete="outlined"
                name="sellerName"
                value={sellerName}
                onChange={onInputChange}
                required
                inputProps={{
                  pattern: "^[A-Za-z ]+$",
                  title: "Letters and spaces only",
                }}
              />
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
                <FaPhone />
              </span>
              <TextField
                id="outline"
                label="Contact No"
                type="tel"
                autoComplete="outlined"
                name="phoneNo"
                value={phoneNo}
                onChange={onInputChange}
                required
                inputProps={{
                  pattern: "[0-9]{10,12}",
                  title: "10-12 digits only",
                }}
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
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  value={password}
                  name="password"
                  onChange={onInputChange}
                  required
                  inputProps={{ minLength: 8, maxLength: 11 }}
                />
              </FormControl>
            </div>

            <button id="sub" type="submit">
              Sign In
            </button>
            <div id="account">
              <p>
                Already have an account?<a href="/adminLogin"> Login</a>
              </p>
            </div>
            {/* <button id="subs" type="submit">
              Back
            </button> */}
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
                src="https://www.dtn.com/wp-content/uploads/2021/03/ag_aeiral-field_img-header_0321.png"
                style={{ width: "385px", height: "700px" }}
              />
              {/* <button className="ghost" id="signUp">Sign In</button> */}
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p>
          Welcome to Agriculture Management System<i class="fa fa-heart"></i> is
          a farmer management website application. It helps farmers improve
          productivity and profitability by implementing best-practice farming
          processes
          <a target="_blank" href="/">
            here
          </a>
          .
        </p>
      </footer>
    </div>
  );
}

export default RegisterAdmin;
