import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../../node_modules/jquery/dist/jquery.min.js';
import glide from '../assets/images/glide.svg';

const Card = () => {
    return(
  <div>
    <div class="card" style="width: 18rem;">
      <img src="{glide}" class="card-img-top" alt="">
      <div class="card-body">
        <h4>Glide</h4>
        <p class="card-text">
         Glide is a homeless resource center in San Francisco, CA.
          <ul>
            <li>Picks up Twice a day</li>
         </ul>
        </p>
    </div>
  </div>
  )

}

export default Welcome;
