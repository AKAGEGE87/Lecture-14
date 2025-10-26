import React, { useState } from "react";
import "./heroHeader.css";
import { GiHamburgerMenu } from "react-icons/gi";

const links = [
  { label: "About", link: "./about" },
  { label: "Services", link: "./services" },
  { label: "Projects", link: "./projects" },
  { label: "Contact", link: "./contact" }
];

const mobileLinks = [
  { label: "About", link: "./about" },
  { label: "Services", link: "./services" },
  { label: "Projects", link: "./projects" },
  { label: "Contact", link: "./contact" }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <h1 className="logo">sunnyside</h1>

      <ul className="desktopNav">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.link}>{link.label}</a>
          </li>
        ))}
      </ul>

      <GiHamburgerMenu className="burgerMenu" onClick={toggleMenu} />

      {isMenuOpen && (
        <div className="mobileMenuOverlay" onClick={closeMenu}>
          <div
            className="mobileMenuContent"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="mobileNav">
              {mobileLinks.map((link, index) => (
                <li key={index} className="burgerMenuList">
                  <a
                    href={link.link}
                    onClick={closeMenu}
                    className="burgerMenuListTitle"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
