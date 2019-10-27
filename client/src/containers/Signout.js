import React, { Component } from "react";
import { connect } from "react-redux";
import { signout } from "../actions";

class Signout extends Component {

    componentDidMount() {
        this.props.signout();
    }

    render() {
        return <h3 className="centered">See you next time!</h3>
    }
}

export default connect(null, {signout})(Signout);