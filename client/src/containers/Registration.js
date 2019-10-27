import React, { Component } from 'react'

export default class Registration extends Component {
   constructor(props) {
      super(props);
      
      this.vendorId = 1;
      this.vendor = {
         business_name: 'Wolfgang Puck Pizza',
         address: {
            address_line_1: '170 O\'Farrell St',
            address_line_2: 'Lower Level',
            city: 'San Francisco',
            state: 'CA',
            postal_code: '94102',
         },
      };
   }

   componentDidMount() {
   }
   
   render() {
    return (
      <div className="container-fluid text-muted p-2">
         <div className="border-bottom p-2">
            <div className="d-inline align-bottom p-2">
               <img height="30px" width="30px" src="https://s3-media3.fl.yelpcdn.com/bphoto/AiY7NjrgmWP9_nE5jtM1iw/o.jpg"/>
            </div>
            <div className="d-inline align-bottom p-2">
               Registration - {this.vendor.business_name}
            </div>
         </div>

         <div className="d-flex flex-column justify-content-center p-3">
            <div className="d-flex flex-row border">
               <div className="col-xs-1 col-sm-1 label bg-secondary text-white p-2">Business Name</div>
               <div className="col-xs-4 col-sm-4 p-2">{this.vendor.business_name}</div>
            </div>
            <div className="d-flex flex-row border">
               <div className="col-xs-1 col-sm-1 label bg-secondary text-white p-2">Address Line 1</div>
               <div className="col-xs-4 col-sm-4 p-2">{this.vendor.address.address_line_1}</div>
            </div>
            <div className="d-flex flex-row border">
               <div className="col-xs-1 col-sm-1 label bg-secondary text-white p-2">Address Line 2</div>
               <div className="col-xs-4 col-sm-4 p-2">{this.vendor.address.address_line_2}</div>
            </div>
            <div className="d-flex flex-row border">
               <div className="col-xs-1 col-sm-1 label bg-secondary text-white p-2">City</div>
               <div className="col-xs-4 col-sm-4 p-2">{this.vendor.address.city}</div>
            </div>
            <div className="d-flex flex-row border">
               <div className="col-xs-1 col-sm-1 label bg-secondary text-white p-2">State</div>
               <div className="col-xs-4 col-sm-4 p-2">{this.vendor.address.state}</div>
            </div>
            <div className="d-flex flex-row border">
               <div className="col-xs-1 col-sm-1 label bg-secondary text-white p-2">Postal Code</div>
               <div className="col-xs-4 col-sm-4 p-2">{this.vendor.address.postal_code}</div>
            </div>
         </div>
      </div>
    )
  }
};