import React, {Component} from 'react';

class Logout extends Component {

    componentDidMount() {
        this.props.handleLogout();
    }

    render() {
        return (
            <div>
                <h1>You are logged out!</h1>
                <h4>Thank you for using our todo app!</h4>
            </div>
        );
    };
}

export default Logout;