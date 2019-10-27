import React, { Component } from 'react'
import Challenge from "../assets/images/Challenge.png"
import Customers from "../assets/images/Customers.png"
import Legal from "../assets/images/Legal.png"
import Taxes from "../assets/images/Taxes.png"
import Value from "../assets/images/Value.png"
import Value2 from "../assets/images/Value2.png"
import How from "../assets/images/How.png"
import How2 from "../assets/images/How2.png"
import Partners from "../assets/images/Partners.png"
import Homeless from "../assets/images/Homeless.png"
import Future from "../assets/images/Future.png"

export default class Home extends Component {
  render() {
    return (
      <div id="homeDiv">
        <div className="centered"><h4>Raising awareness about the Good Samaritan Act to encourage more food vendors to donate excess food to the homeless</h4></div>
        <div className="bannerDiv"><img src={Challenge} alt="Challenge" /></div>
        <div className="bannerDiv"><img src={Customers} alt="Customers" /></div>
        <div className="bannerDiv"><img src={Legal} alt="Legal" /></div>
        <div className="bannerDiv"><img src={Taxes} alt="Taxes" /></div>
        <div className="bannerDiv"><img src={Value} alt="Value" /></div>
        <div className="bannerDiv"><img src={Value2} alt="Value2" /></div>
        <div className="bannerDiv"><img src={How} alt="How" /></div>
        <div className="bannerDiv"><img src={How2} alt="How2" /></div>
        <div className="bannerDiv"><img src={Partners} alt="Partners" /></div>
        <div className="bannerDiv"><img src={Homeless} alt="Homeless" /></div>
        <div className="bannerDiv"><img src={Future} alt="Future" /></div>
      </div>
    )
  }
}
