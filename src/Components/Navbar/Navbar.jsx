import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/sovit-logo.svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />

      <ul className="nav-menu">
        <li>
          <AnchorLink href="#home" className="nav-link" onClick={() => setMenu("home")}>
            Home
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink href="#about" className="nav-link" onClick={() => setMenu("about")}>
            About Me
          </AnchorLink>
          {menu === "about" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink href="#work" className="nav-link" onClick={() => setMenu("portfolio")}>
            Portfolio
          </AnchorLink>
          {menu === "portfolio" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink href="#contact" className="nav-link" onClick={() => setMenu("contact")}>
            Contacts
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt="underline" />}
        </li>
      </ul>

      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
