import React from "react";
import "./section2.css";
import Button from "../button/Button";

const Section2 = () => {
  return (
    <div className="Section2">
      <div className="section2Img"></div>

      <div className="Section2Box">
        <h1 className="Section2Title">Transform your brand</h1>
        <p className="Section2Text">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <Button title="LEARN MORE" hoverColor="#FE7766" />
      </div>
    </div>
  );
};

export default Section2;
