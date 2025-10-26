import React from "react";
import Header from "./Header";
import "./heroHeader.css";

const Hero = () => {
  return (
    <div className="heroBox">
      <Header />
      <div className="heroLine">
        <h1 className="heroText">WE ARE CREATIVES</h1>
        <img
          className="arrow"
          src="arrow.svg"
          alt="arrow"
          style={{ marginTop: "97px" }}
        />
      </div>
    </div>
  );
};

export default Hero;
