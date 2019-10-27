import React from "react";
import Navbar from "./Navbar";

function Header(props) {
  return (
    <div className="page-header" id="heading">
      <h1>Food Do-Gooders</h1>
      <Navbar path={props.path} activate={props.activate} />
    </div>
  );
}

export default Header;