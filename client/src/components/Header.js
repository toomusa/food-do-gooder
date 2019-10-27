import React from "react";
import Navbar from "./Navbar";
// import FDG from "../assets/images/FDG.png"

function Header(props) {
  return (
    <div className="page-header" id="heading">
      {/* <img src={FDG} alt="logo" id="logoImg" /> */}
      <h1>Food Do-Gooder</h1>
      <h5 id="tagline">Do Good with Good Food</h5>
      <Navbar path={props.path} activate={props.activate} />
    </div>
  );
}

export default Header;