import React, { useState } from "react";
import "../styles/components/header.scss";
import { Logo } from "../assets/svg";
import Navbar from "./Navbar";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header>
      <h1 className="logo-name">
        <Logo />
        My Portfolio
      </h1>

      <Navbar />

      <div className="menu-div">
        {openMenu ? (
          <GrClose className="menu" onClick={() => setOpenMenu(false)} />
        ) : (
          <FiMenu className="menu" onClick={() => setOpenMenu(true)} />
        )}
        <div className={`menu-nav ${openMenu && "visible"}`}>
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
