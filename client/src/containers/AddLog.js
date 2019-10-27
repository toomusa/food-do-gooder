import React, { Component } from 'react'
import Stepper from "react-stepper-horizontal"
import StepOne from "../components/StepOne"
import StepTwo from "../components/StepTwo"
import StepThree from "../components/StepThree"

export default class AddLog extends Component {

  state = {
    currentStep: 0
  }

  onClickNext() {
    const { currentStep } = this.state;
    this.setState({
      currentStep: currentStep + 1,
    });
  }

  onClickPrev() {
    const { currentStep } = this.state;
    this.setState({
      currentStep: currentStep - 1,
    });
  }

  renderStep() {
    const { currentStep } = this.state;
    switch(currentStep) {
      case 0:
        return (<StepOne />)
      case 1:
        return (<StepTwo />)
      case 2:
        return (<StepThree />)
      case 3: 
        return (<h3>Your donation is logged successfully.</h3>)
      default:
        return(<div></div>)
    }
  }

  render() {  
    const buttonStyle = { background: '#E0E0E0', width: 100, padding: 6, textAlign: 'center', margin: '10px', marginTop: 32 };
    const { currentStep } = this.state;

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-sm-12 col-xs-12 offset-md-1">
              <div className="centered">
                <h3>Follow these 3 easy steps to record a donation</h3>
              </div>
              <div>
                <Stepper steps={ [{title: 'Info'}, {title: 'Log'}, {title: 'Receipt'}] } activeStep={ currentStep } />
              </div>
              <div className="centered">
                <button style={ buttonStyle } onClick={ () => this.onClickPrev() }>Back</button>
                <button style={ buttonStyle } onClick={ () => this.onClickNext() }>{currentStep === 2 ? <span>Finish</span> : <span>Next</span>}</button>
              </div>
              <div className="centered">
                {this.renderStep()}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
