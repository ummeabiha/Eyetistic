import React from "react";
import "./Intro.css";
import "../styles.css";

function ForgotPassword2() {
  return (
    <div className="intro">
    <div className="intro_container">
        <form className="login_form">
        <div className="title">Forgot your Password
          <p id="forgot_pswd_describe2">Enter the code that has been sent to you at your email.</p>
        </div>
          <div className="irow" id='forgot'>
            <i className="fa fa-lock"></i>
            <input
              type="tel"
              placeholder="Enter code"
              className="fields"
              required
            />
          </div>

          <input className="intro_button" type="submit"/>
          
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword2;
