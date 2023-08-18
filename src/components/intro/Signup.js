import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Intro.css";
import "../styles.css";
import AlertBox from "../AlertBox";

export default function Signup() {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const [username, setusername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Password2, setPassword2] = useState("");

  const nav = useNavigate();

  const handlechangeUsername = (e) => {
    setusername(e.target.value);
  };
  const handlechangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlechangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handlechangePassword2 = (e) => {
    setPassword2(e.target.value);
  };

  const setNull = () => {
    setEmail("");
    setPassword("");
    setusername("");
    setPassword2("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (Password != Password2) {
      setAlertMessage("Recheck both Passwords");
      setIsAlertOpen(true);
      setNull();
    } else {
      axios
        .post("http://localhost/eyetistic/signup.php", {
          username: username,
          Email: Email,
          Password: Password,
        })
        .then((response) => {
          if (response.data == "Email Exists") {
            setAlertMessage("Email Already Registered");
            setIsAlertOpen(true);
            setNull();
          } else if (response.data == "Username Exists") {
            setAlertMessage("Username Already Exists");
            setIsAlertOpen(true);
            setNull();
          } else {
            if (response.data == "Success") {
              setAlertMessage("Signup Successful");
              setIsAlertOpen(true);
              setTimeout(() => {
                setIsAlertOpen(false); 
                nav("/");
                }, 1000); 
            } else {
              alert("An error occured. Try again.");
            }
          }
        });
    }
  };

  const closeAlert = () => {
    setIsAlertOpen(false);
  };

  return (
    <div className='intro'>
    <div className="intro_container">
      <form className="login_form" method="POST" onSubmit={handleSubmit}>
      <div className="title">SIGNUP</div>
        <div className="irow">
          <i className="fa fa-user"></i>
          <input className='fields'
            type="text"
            id="signup_name"
            placeholder=" Enter User Name"
            value={username}
            onChange={handlechangeUsername}
            required
          />
        </div>
        <div className="irow">
          <i className="fa fa-envelope"></i>
          <input className='fields'
            type="email"
            id="signup_email"
            value={Email}
            onChange={handlechangeEmail}
            placeholder=" Enter Email"
            required
          />
        </div>
        <div className="irow">
          <i className="fa fa-key"></i>
          <input className='fields' 
            type="password"
            id="signup_password"
            placeholder="Enter Password"
            value={Password}
            onChange={handlechangePassword}
            required
          />
        </div>

        <div className="irow">
          <i className="fa fa-key"></i>
          <input className='fields'
            type="password"
            id="DOB"
            placeholder="Re-enter Password"
            value={Password2}
            onChange={handlechangePassword2}
            required
          />
        </div>
        {/* <div className="row">
          <input type="submit" className="intro_button" value="Signup" />
        </div> */}
        <div className="row already">
        <input type="submit" className="intro_button" value="Signup" />
          <span>Already have an account?</span><Link to="/">Login</Link>
        </div>
      </form>
    </div>
    <AlertBox open={isAlertOpen} onClose={closeAlert}>
            {alertMessage}
          </AlertBox>
    </div>
  );
}

