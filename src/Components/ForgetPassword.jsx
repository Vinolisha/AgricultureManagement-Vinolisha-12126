import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

function ForgetPassword() {


    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const onSubmit = async (e) => {
        e.preventDefault();
        alert("Email sent to the respective Mail");
        navigate("/");
      };


  return (
    <div>
      <div className="container mt-5" id="containers">
        <div className="form-container sign-in-container">
          <form id="forms" action="#" onSubmit={(e) => onSubmit(e)}>
            <div className="input-group mb-3">
            <br/>
            <br/>
            <br/>
            
        
            <h1 id="signin"> Forgot Password </h1>
            <div className="social-container">
                </div>
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
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button id="sub" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              
              
              <img
                src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1123.jpg?size=338&ext=jpg&ga=GA1.1.44546679.1716249600&semt=ais_user"
                style={{ width: "385px", height: "700px" }}
              />
              {/* <button className="ghost" id="signUp">Sign In</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
