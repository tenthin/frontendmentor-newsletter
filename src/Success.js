import React from "react";
import "./Success.css";
import Success_tick from "./images/icon-success.svg";

function Success() {
  return (
    <div className="container">
        <div className="success_container">
      <img src={Success_tick} alt="" className="success_tick" />
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to <b>ash@loremcompany.com</b>. Please open
        it and click the button inside to confirm your subscription.
      </p>
      <button className="btn">Dismiss message</button>
      </div>
    </div>
  );
}

export default Success;
