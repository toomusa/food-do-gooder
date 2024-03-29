import React, { Component } from "react";
import { connect } from "react-redux";

export default ChildComponent => {
    class ComposedComponent extends Component {
        componentDidMount(){
            this.shouldNavigateAway();
        }

        componentDidUpdate(){
            this.shouldNavigateAway();
        }

        shouldNavigateAway(){
            if (!this.props.auth) {
                this.props.history.push("/");
            }
        }

        render() {
            console.log(this.props)
            return <ChildComponent {...this.props} />
        }
    }

    function mapStateToProps({ auth }) {
        return { auth: auth.authenticated };
        // return {state};
    }

    return connect(mapStateToProps, null)(ComposedComponent);
}
