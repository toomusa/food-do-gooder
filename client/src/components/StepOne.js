import React from "react";
import donation from "../assets/images/food-donation.jpg"

export default function StepOne() {
  return (
    <div>
      <h5>Fill out the information below</h5><br></br>
      <h6><strong>Business Name:</strong> <span className="fading">Wolfgang Puck Pizza</span></h6>
      <h6><strong>Date:</strong>  <span className="fading">10/27/2019</span></h6>
      <h6><strong>Donated Items:</strong>  <span className="fading">Lettuce, tomatoes, onions, peppers</span></h6>
      <h6><strong>Estimated Worth:</strong>  <span className="fading">$80</span></h6>
      <h6><strong>Estimated Servings:</strong>  <span className="fading">12</span></h6>
      <h6><strong>Photo:</strong><br></br><br></br>  <span className="fading"><img src={donation} alt="food donation" /></span></h6>
    </div>
  )
}