import React from 'react';

export default function Card(props) {
  return (
    <div align="center" className="partner-div">
      <div className="card border-light">
        <div className="row no-gutters">
          <div className="col-md-3">
            <img src={props.picture} alt="logo" className="card-img-top w-70 partnerImg marginer" />
          </div>
          <div className="col-md-5">
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">{props.description}</p>
              <p className="card-text">{props.schedule}</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h5 className="card-title">{props.name}&nbsp;Info</h5>
              <p className="card-text" align="left">
                <ul>
                  <li>{props.address}</li>
                  <li>{props.phone}</li>
                  <li><a href={props.website} rel="noopener noreferrer" target="_blank">Website</a></li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
