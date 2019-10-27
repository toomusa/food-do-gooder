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
        this.props.history.push("/dashboard");
        break;
      default:
        return(<div></div>)
    }
  }

  render() {  
    const buttonStyle = { background: '#E0E0E0', width: 200, padding: 16, textAlign: 'center', margin: '0 auto', marginTop: 32 };

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-sm-12 col-xs-12 offset-md-1">
              Add Log Page
              <div>
                <Stepper steps={ [{title: 'Info'}, {title: 'Log'}, {title: 'Receipt'}] } activeStep={ 0 } />
              </div>
              <div>
                {this.renderStep()}
              </div>
              <div>
                <button style={ buttonStyle } onClick={ () => this.onClickPrev() }>Back</button>
                <button style={ buttonStyle } onClick={ () => this.onClickNext() }>Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
