import React from "react";
import "../../styles/components/header.scss";
import { Logo } from "../../assets/svg";
import Navbar from "../Navbar";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <header>
      <h1 className="logo-name">
        <Logo />
        My Portfolio
      </h1>

      <Navbar />

      <FiMenu className="menu" />
    </header>
  );
};

export default Header;
