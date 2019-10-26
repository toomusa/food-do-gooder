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
      <div>
         <div>Registration Page</div>
         <div>Vendor ID</div><div>{this.vendorId}</div>
         <div>Business Name</div><div>{this.vendor.business_name}</div>
         <div>Address Line 1</div><div>{this.vendor.address.address_line_1}</div>
         <div>Address Line 2</div><div>{this.vendor.address.address_line_2}</div>
         <div>City</div><div>{this.vendor.address.city}</div>
         <div>State</div><div>{this.vendor.address.state}</div>
         <div>Postal Code</div><div>{this.vendor.address.postal_code}</div>
      </div>
    )
  }
}
