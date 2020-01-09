import React, {Component} from 'react';
import {Redirect, Route} from "react-router-dom";

class PrivateRoute extends Component {
    render() {
            if (this.props.isUserLoggedIn) {
               return (<Route {...this.props} />)
            } else {
                return (<Redirect to={"/login"}/>)
            }
    }
}

export default PrivateRoute;