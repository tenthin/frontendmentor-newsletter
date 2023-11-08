import React from "react";
import "./App.css";
import DesktopImg from "./images/illustration-sign-up-desktop.svg";
import MobileImg from "./images/illustration-sign-up-mobile.svg";
import IconList from "./images/icon-list.svg";

function Home() {
  return (
    <div className="home">
      <div className="content">
      <div className="mobile_img">
        <img src={MobileImg} alt="mobile" />
      </div>
      <div className="mobile-response">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className="list">
          <li>
            <img src={IconList} alt="tick" />
            Product discovery and building what matters
          </li>
          <li>
            <img src={IconList} alt="tick" />
            Measuring to ensure updates are a success
          </li>
          <li>
            <img src={IconList} alt="tick" />
            And much more!
          </li>
        </ul>  
        <div className="inputfield">
          <p>Email address</p>
          <input type="text" placeholder="email@company.com"/>
        </div>
        <button className="btn">Subscribe to monthly newsletter</button>
      </div>
      </div>
      <div className="desktop-img">
        <img src={DesktopImg} alt="desktop" />
      </div>
    </div>
  );
}

export default Home;
