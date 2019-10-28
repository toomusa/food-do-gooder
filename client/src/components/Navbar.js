import React from "react"
import { Link } from "react-router-dom"

export default function Navbar(props) {
  return(
    <div className="navbar">
      <div id="navtext">
        <Link to="/" className="linko" onClick={() => props.activate("/")}>
          {props.path === "/"
            ? <span className="activeLink"><strong>Home</strong></span>
            : <span>Home</span>}
        </Link>
        <Link to="/dashboard" className="linko" onClick={() => props.activate("/dashboard")}>
          {props.path === "/dashboard"
            ? <span className="activeLink"><strong>Dashboard</strong></span>
            : <span>Dashboard</span>}
        </Link>
        <Link to="/registration" className="linko" onClick={() => props.activate("/registration")}>
          {props.path === "/registration"
            ? <span className="activeLink"><strong>Registration</strong></span>
            : <span>Registration</span>}
        </Link>
        <Link to="/tax" className="linko" onClick={() => props.activate("/tax")}>
          {props.path === "/tax"
            ? <span className="activeLink"><strong>Tax Benefits</strong></span>
            : <span>Tax Benefits</span>}
        </Link>
        <Link to="/partners" className="linko" onClick={() => props.activate("/partners")}>
          {props.path === "/partners"
            ? <span className="activeLink"><strong>Partners</strong></span>
            : <span>Partners</span>}
        </Link>
        <Link to="/newentry" className="linko" onClick={() => props.activate("/newentry")}>
          {props.path === "/newentry"
            ? <span className="activeLink"><strong>New Entry</strong></span>
            : <span>New Entry</span>}
        </Link>
        {/* <Link to="/signout" className="linko" onClick={() => props.activate("/signout")}>
          {props.path === "/signout"
            ? <span className="activeLink"><strong>Signout</strong></span>
            : <span>Signout</span>}
        </Link> */}
      </div>
    </div>
  )
}