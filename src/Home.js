import React from "react";
import "./App.css";
import DesktopImg from "./images/illustration-sign-up-desktop.svg";

function Home() {
  return (
    <div>
      <div className="content">
        <h2>Stay updated!</h2>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <div className=""></div>
      </div>
      <div className="desktop-img">
        <img src={DesktopImg} alt="" />
      </div>
    </div>
  );
}

export default Home;
