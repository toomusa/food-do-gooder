import React, { Component } from 'react';
import Card from '../components/Card/card.js';
let partners = require('../static/partnersdata.js').partners;

export default class Partners extends Component {
  render() {
    return (
      <div>
        Partners Page
        {
        partners.map((partnerdata) => {
          <Card 
            name = {partnerdata.name}
	    description = {partnerdata.description}	
            schedule = {partnerdata.schedule}
            picture = {partnerdata.picture}
   	  /> 
	})
	}
      </div>
    )
  }
}
