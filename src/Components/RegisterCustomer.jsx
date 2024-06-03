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

function RegisterCustomer() {
  const [showPassword, setShowPassword] = useState(false);
  const [Record, setRecord] = useState({
    customerId: "",
    customerName: "",
    email: "",
    phoneNo: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecord({ ...Record, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Service.Register(Record);
      // alert("Registration Successfully Completed " + Record.customerName);
      navigate("/customerLogin");
    } catch (error) {
      alert(
        "Email is already existed!!! please use another email!! " +
          Record.customerName
      );
    }
    window.location.reload();
  };

  return (
    <div className="back">
      <div className="container mt-lg-5 " id="containers">
        <div className="form-container sign-in-container">
          <form id="forms" action="#" onSubmit={handleSubmit}>
            <h1 id="signin"> Customer Sign In</h1>
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
                name="customerName"
                value={Record.customerName}
                onChange={handleInputChange}
                required
                inputProps={{
                  pattern: "^[A-Za-z ]*$",
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
                value={Record.email}
                onChange={handleInputChange}
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
                value={Record.phoneNo}
                onChange={handleInputChange}
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
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  value={Record.password}
                  name="password"
                  onChange={handleInputChange}
                  required
                  inputProps={{ minLength: 8, maxLength: 10 }}
                />
              </FormControl>
            </div>

            <button id="sub" type="submit">
              Sign In
            </button>
            <div id="account">
              <p>
                Already have an account?<a href="/customerLogin"> Login</a>
              </p>
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
                alt="farmers"
              />
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p>
          Welcome to Agriculture Management System<i class="fa fa-heart"></i> is
          a farmer management website application. It helps farmers improve
          productivity and profitability by implementing best-practice farming
          processes{" "}
          <a target="_blank" href="/">
            here
          </a>
          .
        </p>
      </footer>
    </div>
  );
}

export default RegisterCustomer;
