import React from "react";
import receipt from "../assets/images/donation-receipt.jpg"

export default function StepTwo() {

  return (
    <div>
      <h5>Take a photo of your receipt</h5>
      <img src={receipt} alt="donation receipt" id="receipt" />
    </div>
  )
}