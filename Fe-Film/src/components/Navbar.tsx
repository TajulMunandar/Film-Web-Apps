import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo2.png";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand p-0 m-0" to="/">
          <img src={Logo} alt="" width={150} className="p-0 m-0" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
