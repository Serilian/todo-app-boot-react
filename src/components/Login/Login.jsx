import React, {Component} from 'react';
import "./Login.scss";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isAuthenticated: null
        }
    }

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    };

    componentDidMount() {
        if(localStorage.getItem('authenticatedUser')) {
            let username = localStorage.getItem('authenticatedUser');
            let atIndex = localStorage.getItem('authenticatedUser').indexOf("@");
            this.props.handleLogin(username);
            this.props.history.push(`/home/${username.substring(0, atIndex)}`);
        } else {

        }
    }


   handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.email === "fhagno@yahoo.com" && this.state.password === "test123") {
        this.setState({
            isAuthenticated: true
        });
        let atIndex = this.state.email.indexOf("@");
        this.props.handleLogin(this.state.email);
        this.props.history.push(`/home/${this.state.email.substring(0, atIndex)}`);
    } else {
        this.setState({
            isAuthenticated: false
        });
    }
};
    render() {
        const {isAuthenticated, email, password} = this.state;

        return (
            <div style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }} className={"container"}>
                {!isAuthenticated && <h1>Please log in</h1>}
                {isAuthenticated && <h3>Login successful</h3>}
                {(isAuthenticated !== null && !isAuthenticated) &&
                <h3 className={"alert alert-danger"}>Login failed</h3>}
                <form>
                    <div className={"form-group"}>
                        <label htmlFor="email">Email</label>
                        <input id={"email"} name={"email"} value={email} onChange={this.handleChange}
                               placeholder={"email"}/>
                    </div>
                    <div className={"form-group"}>
                        <label htmlFor="password">Password</label>
                        <input id={"password"} name={"password"} value={password}
                               onChange={this.handleChange} type={"password"}
                               placeholder={"password"}/>
                    </div>
                    <input className={"btn btn-success"} type={"submit"} value={"Submit"} onClick={this.handleSubmit}/>
                </form>
            </div>
        );
    }
    ;
}

export default Login;