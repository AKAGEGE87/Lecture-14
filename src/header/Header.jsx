import React from "react";
import "./heroHeader.css";
import { GiHamburgerMenu } from "react-icons/gi";

const links = [
  {
    label: "About",
    link: "./about"
  },
  {
    label: "Services",
    link: "./services"
  },
  { label: "Projects", link: "./projects" },
  { label: "Contact", link: "./contact" }
];
const Header = () => {
  return (
    <header className="box">
      <h1 className="logo">sunnyside</h1>

      <ul>
        {links.map((link, index) => {
          return (
            <li className="headerLinks">
              <a key={index} href={link.link}>
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
      <GiHamburgerMenu className="burgerMenu" />
    </header>
  );
};

export default Header;
