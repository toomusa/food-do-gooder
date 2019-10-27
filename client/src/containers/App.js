import React, { Component } from 'react'
import Header from '../components/Header'

export default class App extends Component {

  state = {
    path: window.location.pathname
  }

  activatePage = (pathname) => {
    console.log(pathname)
    this.setState({
      path: pathname
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12" id="rowing">
            <Header path={this.state.path} activate={this.activatePage} />
          </div>  
        </div>  
        <div className="row">
          <div className="col-md-10 col-sm-12 col-xs-12 offset-md-1">
            <div className="wrapper">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}


