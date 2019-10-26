import React, { Component } from 'react'

export default class Registration extends Component {
   constructor(props) {
      super(props);
      
      this.vendorId = 1;
      this.vendor = {
         business_name: 'ABC',
         address: {
            address_line_1: '101 Post Street',
            address_line_2: 'Unit #123',
            city: 'San Francisco',
            state: 'CA',
            postal_code: '94101',
         },
      };
   }

   componentDidMount() {
   }
   
   render() {
    return (
      <div className="container-fluid text-muted p-2">
         <div className="d-flex flex-column justify-content-left text-muted p-3 border-bottom">Your Registration Info</div>
         <div className="d-flex flex-column justify-content-center p-3">
            <div className="d-flex flex-row border">
               <div className="col-xs-1 col-sm-1 label bg-secondary text-white p-2">Vendor ID</div>
               <div className="col-xs-4 col-sm-4 p-2">{this.vendorId}</div>
            </div>
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