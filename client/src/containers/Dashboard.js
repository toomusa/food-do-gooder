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
	<div>
	<table class="table table-borderless">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Donated Items</th>
              <th scope="col">Estimated Worth</th>
              <th scope="col">Received By</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10/19/20</td>
              <td>Garlic Rolls, Spaghetti, Pizza</td>
              <td>$75</td>
              <td>Glide</td>
            </tr>
            <tr>
              <td>10/25/20</td>
              <td>Taco Meat, Tortillas, Rice, Beans</td>
              <td>$65</td>
              <td>Food Runners</td>
            </tr>
            <tr>
              <td>10/05/20</td>
              <td>Chicken Tandoori, Naan, Butter Chicken</td>
              <td>$85</td>
              <td>St. Anthonsy</td>
            </tr>
            <tr>
              <td>10/14/20</td>
              <td>Bulgogi, Dumplings, Rice, Seaweed Snacks</td>
              <td>$75></td>
              <td>City Team</td>
            </tr>
          </tbody>
        </table>
	</div>
      </div>
    )
  }
}
