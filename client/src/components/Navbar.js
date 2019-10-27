import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  return(
    <div className="navbar">
      <div id="navtext">
        <Link to="/" className="linko">
          {window.location.pathname === "/"
            ? <span><strong>Home</strong></span>
            : <span>Home</span>}
        </Link>
        <Link to="/registration" className="linko">
          {window.location.pathname === "/registration"
            ? <span><strong>Registration</strong></span>
            : <span>Registration</span>}
        </Link>
        <Link to="/dashboard" className="linko">
          {window.location.pathname === "/dashboard"
            ? <span><strong>Dashboard</strong></span>
            : <span>Dashboard</span>}
        </Link>
        <Link to="/newentry" className="linko">
          {window.location.pathname === "/newentry"
            ? <span><strong>New Entry</strong></span>
            : <span>New Entry</span>}
        </Link>
        <Link to="/tax" className="linko">
          {window.location.pathname === "/tax"
            ? <span><strong>Tax Benefits</strong></span>
            : <span>Tax Benefits</span>}
        </Link>
        <Link to="/signout" className="linko">
          {window.location.pathname === "/signout"
            ? <span><strong>Signout</strong></span>
            : <span>Signout</span>}
        </Link>
      </div>
    </div>
  )
}