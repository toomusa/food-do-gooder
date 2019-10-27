import React, { Component } from 'react'
import PDFViewer from 'pdf-viewer-reactjs';
import Form8283 from "../assets/files/Form-8283.pdf";
import Instructions from "../assets/files/Form-8283-Instructions.pdf";

export default class Tax extends Component {

  state = {
    tab: 1
  }

  renderPdf() {
    switch(this.state.tab) {
      case 1: 
        return (
        <PDFViewer 
          document={{file: Form8283}} canvasCss="pdfCanvas" css="pdfPage" scale={1.5} navbarOnTop={true}/>)
      case 2:
        return (
        <PDFViewer 
          document={{file: Instructions}} canvasCss="pdfCanvas" css="pdfPage" scale={1.5} navbarOnTop={true}/>)
      default:
        return (
        <PDFViewer 
          document={{file: Form8283}} canvasCss="pdfCanvas" css="pdfPage" scale={1.5} navbarOnTop={true}/>)
    }
  }

  selectForm(num) {
    this.setState({
      tab: num
    })
  }

  render() {
    const buttonStyle = { width: 100, padding: 6, textAlign: 'center', margin: '10px' };

    return (
      <div>
        <div className="centered">
          <h5>You will need to file a Form 8283 in order to claim your itemized deductions.</h5>
          <h5>When you export your logs for tax purposes, we will automatically generate a</h5>
          <h5>Supplemental Statement with your donation records that you can attach to this form.</h5>
        </div>
        <div className="centered">
          <button className="btn-primary" style={ buttonStyle } onClick={ () => this.selectForm(1) }>Form 8283</button>
          <button className="btn-primary" style={ buttonStyle } onClick={ () => this.selectForm(2) }>Instructions</button>
        </div>
        <div id="pdfDiv">
          {this.renderPdf()}
        </div>
      </div>
    )
  }
}
