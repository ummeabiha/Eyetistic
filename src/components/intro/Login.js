import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import "./Intro.css";
import "../styles.css";
import AlertBox from "../AlertBox";
// import Shop from "./Shop";

var user_id = "";
function Login() {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const nav = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost/eyetistic/login.php", {
        Email: Email,
        Password: Password,
      })
      .then((Response) => {
        if (Response.data === "verified") {
          setAlertMessage("Login Successful!");
          setIsAlertOpen(true);
          setTimeout(() => {
            setIsAlertOpen(false); 
            nav("/home");
            }, 1000);
          user_id = Email;
          localStorage.setItem("Email", Email);
        } else {
          setEmail("");
          setPassword("");
          setAlertMessage("Login Unsuccessful.");
          setIsAlertOpen(true);
        }
      });
  };

  const closeAlert = () => {
    setIsAlertOpen(false);
  };

  return (
    <div className='intro'>
      <div className="intro_container">
          <form className="login_form" method="POST" onSubmit={handleSubmit}>
              <div className="title">LOGIN</div>
                <div className="irow">
                  <i className="fa fa-user" id="person_icon"></i>
                  <input type="email" className='fields' name="login_email" placeholder="Enter Email" value={Email} onChange={handleChangeEmail} required/>
                </div>
                <div className="irow">
                  <i className="fa fa-key" id="password_icon"></i>
                  <input
                    type="password"
                    className='fields'
                    name="login_password"
                    placeholder="Enter Password"
                    value={Password}
                    onChange={handleChangePassword}
                    required
                  />
                </div>
                {/* <div className="row already"> */}
                  {/* <Link to="/forgotPassword_pg_1" id="Forgot_password">Forgot your password?</Link> */}
                {/* </div> */}
                <div className="row already">
                  <input type="submit" className="intro_button" value="Login" />
                  <span>Don't have an account?</span><Link to="/signup">Signup</Link>
                </div>
          </form>
      </div>
      <AlertBox open={isAlertOpen} onClose={closeAlert}>
            {alertMessage}
          </AlertBox>
    </div>
  );
}

export { Login, user_id };
