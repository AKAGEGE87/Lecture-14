import React from "react";
import "./section1.css";
import Button from "../button/Button";

const Section1 = () => {
  return (
    <div className="section1">
      <div className="section1Box">
        <h1 className="section1Title">Transform your brand</h1>
        <p className="section1Text">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        {/* <button className="section1Btn">LEARN MORE</button> */}
        <Button title="LEARN MORE" />
      </div>
      <img src="./1.png" alt="" />
    </div>
  );
};

export default Section1;
