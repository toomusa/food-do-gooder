import React, { Component } from 'react'
// import Challenge from "../assets/images/Challenge.png"
import Challenge2 from "../assets/images/Challenge2.png"
import Customers from "../assets/images/Customers.png"
import Legal from "../assets/images/Legal.png"
import Partners from "../assets/images/Partners.png"
import Taxes from "../assets/images/Taxes.png"
import Value from "../assets/images/Value.png"

export default class Home extends Component {
  render() {
    return (
      <div id="homeDiv">
        {/* <div className="bannerDiv"><img src={Challenge} alt="Challenge" /></div> */}
        <div className="bannerDiv"><img src={Challenge2} alt="Challeng2e" /></div>
        <div className="bannerDiv"><img src={Legal} alt="Legal" /></div>
        <div className="bannerDiv"><img src={Taxes} alt="Taxes" /></div>
        <div className="bannerDiv"><img src={Customers} alt="Customers" /></div>
        <div className="bannerDiv"><img src={Value} alt="Value" /></div>
        <div className="bannerDiv"><img src={Partners} alt="Partners" /></div>
      </div>
    )
  }
}
