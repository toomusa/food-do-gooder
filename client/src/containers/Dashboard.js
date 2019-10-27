import React, { Component } from 'react'
import Dashboard1 from "../assets/images/Dashboard1.png"
import Dashboard2 from "../assets/images/Dashboard2.png"
import Dashboard3 from "../assets/images/Dashboard3.png"
import Dashboard4 from "../assets/images/Dashboard4.png"

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="centered">
          <div><h3>Welcome to your Dashboard</h3></div><br></br>
          <img src={Dashboard3} alt="Graphic 3" className="dashboard-image top-row" />
          <div className="spacer"></div>
          <div id="info-block"><h4>You can view various stats about your contributions and see your donation logs.</h4></div>
          <img src={Dashboard4} alt="Graphic 4" className="dashboard-image top-row" />
          <br></br>
          <img src={Dashboard2} alt="Graphic 2" className="dashboard-image" />
          <img src={Dashboard1} alt="Graphic 1" className="dashboard-image" />
        </div>
      </div>
    )
  }
}
