import React from "react";

export default function StepTwo() {
  const time = new Date().toLocaleTimeString();

  return (
    <div>
      <h5>Select the receiving party and time</h5>
      <h6><strong>Pickup by:</strong> 
        <select>
          <option selected value="Select One">Select One</option>
          <option value="Glide">Glide</option>
          <option value="St. Anthony's">St. Anthony's</option>
          <option value="Meals on Wheels">Meals on Wheels</option>
        </select>
      </h6>
      <h6><strong>Time:</strong> {time}</h6>
    </div>
  )
}