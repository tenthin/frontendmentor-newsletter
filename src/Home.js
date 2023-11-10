import React, { useState } from "react";
import "./App.css";
import DesktopImg from "./images/illustration-sign-up-desktop.svg";
import MobileImg from "./images/illustration-sign-up-mobile.svg";
import IconList from "./images/icon-list.svg";

function Home() {
  const [email, setEmail] = useState("");
  const [showValidation, setShowValidation] = useState(false);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setShowValidation(false); // Reset validation on input change
  };

  const handleValidation = () => {
    const isValid = /\S+@\S+\.\S+/.test(email);
    setShowValidation(!isValid);
  };

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
            <div className="email-flex">
            <p>Email address</p>
            {showValidation && <p id="valid-email">Valid email required</p>}
            </div>
            <input
              type="text"
              placeholder="email@company.com"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleValidation} // Check validation on blur (when focus leaves the input)
            />
        
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
