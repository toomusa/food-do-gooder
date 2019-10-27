import React from "react";
import Navbar from "./Navbar";
// import FDG from "../assets/images/FDG.png"

function Header(props) {
  return (
    <div className="page-header" id="heading">
      {/* <img src={FDG} alt="logo" id="logoImg" /> */}
      <h1>Food Do-Gooders</h1>
      <Navbar path={props.path} activate={props.activate} />
    </div>
  );
}

export default Header;