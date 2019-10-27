import React from "react";
import donation from "../assets/images/food-donation.jpg"

export default function StepOne() {
  return (
    <div>
      <h5>Fill out the information below</h5><br></br>
      <h6><strong>Business Name:</strong> McDonald's</h6>
      <h6><strong>Date:</strong> 10/27/2019</h6>
      <h6><strong>Donated Items:</strong> Buns, lettuce, tomatoes, ketchup</h6>
      <h6><strong>Estimated Worth:</strong> $80</h6>
      <h6><strong>Estimated Servings:</strong> 12</h6>
      <h6><strong>Photo:</strong><br></br><br></br> <img src={donation} alt="food donation" /></h6>
    </div>
  )
}