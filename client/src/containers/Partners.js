import React, { Component } from 'react';
import Card from '../components/Card/Card.js';
import PartnerData from '../static/partnerdata.js';

export default class Partners extends Component {
  render() {
    return (
      <div>
        {/* <div className="centered"><h2>Partners Page</h2></div> */}
        <div className="centered"><h3>Here you can explore non-profit organizations in your area who can schedule and pick up your donations.</h3></div>
        {PartnerData.map((npo) => {
          return (<Card 
            name = {npo.name}
	          description = {npo.description}	
            schedule = {npo.schedule}
            picture = {npo.picture}
            website = {npo.website}
            address = {npo.address}
            phone = {npo.phone}
          />) 
	      })}
      </div>
    )
  }
}
