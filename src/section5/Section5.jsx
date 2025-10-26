import React from "react";
import "./section5.css";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";

const img = [
  {
    url: "Bitmap.jpg"
  },
  {
    url: "Bitmap2.jpg"
  },
  {
    url: "Bitmap3.jpg"
  },
  {
    url: "Bitmap4.jpg"
  }
];

const links = [
  {
    title: "About",
    url: "./about"
  },
  {
    title: "Services",
    url: "./services"
  },
  {
    title: "Projects",
    url: "./projects"
  }
];

const socNav = [
  {
    icon: <IoLogoFacebook />,
    url: "https://www.facebook.com/"
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/"
  },
  {
    icon: <FaTwitter />,
    url: "https://twitter.com/"
  },
  {
    icon: <FaPinterest />,
    url: "ttps://www.pinterest.com/"
  }
];
const Section5 = () => {
  return (
    <footer className="section5">
      <div className="imageBox">
        <div className="img1"></div>
        <div className="img2"></div>
        <div className="img3"></div>
        <div className="img4"></div>
      </div>

      <div className="section5Box">
        <h1 className="section5Title">sunnyside</h1>
        <nav className="linksNav">
          <ul className="section5Links">
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link.url} className="section5Link">
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <nav className="socNav">
          <ul className="socNavLink">
            {socNav.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link.url} className="section5soc" target="_blanck">
                    {link.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Section5;
