import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Intro.css";
import "../styles.css";

export default function ForgotPassword() {
  const nav = useNavigate();

  const [Email, setEmail] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost/eyetistic/forgot.php", { Email: Email })
      .then((Response) => {
        if (Response.data == "verified") {
          nav("/forgotPassword_pg_2");
        } else {
          console.log("error");
          setEmail("");
        }
      });
  };
  return (
    <div className='intro'>
    <div className="intro_container">
      <form className="login_form" method="POST" onSubmit={handleSubmit}>
        <div className="title">Forgot your Password
        <p id="forgot_pswd_describe">Enter your email to send recovery code.</p></div>
        <div className="irow">
          <i className="fa fa-envelope"></i>
          <input
            type="email"
            placeholder="Enter your Email"
            value={Email}
            onChange={handleChangeEmail}
            className="fields"
            required
          />
        </div>
        <div className="row">
          <button type="submit" id="proceed_button" className="intro_button">
            Proceed
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

