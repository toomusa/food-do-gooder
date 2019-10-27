import React, { Component } from 'react';A
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../../node_modules/jquery/dist/jquery.min.js';
import glide from '../assets/images/glide.svg';

const Card = () => {
    return(
  <div align="center">
    <div className="card" style="max-width: 1000px;">
        <div className="row no-gutters">
            <div className="col-md-3" style="background: #868e96;">
                <img src="{glide}" className="card-img-top h-100" alt="Image Error">
            </div>
            <div className="col-md-5">
                <div className="card-body">
                    <h5 className="card-title">Glide</h5>
                    <p className="card-text">Glide is a homeless shelter that specializes in aromatherpay</p>
                </div>
            </div>
             <div className="col-md-4">
                <div className="card-body">
                    <h5 className="card-title">Glide Info</h5>
                    <p className="card-text">
                      <ul>
                        <li>Picks up Twice a week</li>
                        <li><a href="/">Click here for website</a></li>
                      </ul>
                    </p>
                </div>
            </div>
        </div>
    </div>
  </div>
  )

}

export default Card;
