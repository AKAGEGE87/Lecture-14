import React from "react";
import "./section4.css";

const users = [
  {
    icon: "./oval.png",
    text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    name: "Emily R.",
    job: "Marketing Director"
  },
  {
    icon: "./oval2.png",
    text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    name: "Thomas S.",
    job: "Chief Operating Officer"
  },
  {
    icon: "./oval3.png",
    text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    name: "Jennie F.",
    job: "Business Owner"
  }
];

const Section4 = () => {
  return (
    <div className="section4">
      <h1>CLIENT TESTIMONIALS</h1>
      <div className="cardBox">
        {users.map((user, index) => {
          return (
            <div key={index} className="card">
              <img src={user.icon} alt="" />
              <p>{user.text}</p>
              <div className="cardFooter">
                <h2>{user.name}</h2>
                <h3>{user.job}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section4;
