import React, {Component} from 'react';
import "./Login.scss";
import Jwtauthservice from "../../service/jwtauthservice";

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

    }

    handleSubmit = (e) => {
        e.preventDefault();
        let atIndex = this.state.email.indexOf("@");
        let username= this.state.email.substring(0, atIndex);
        Jwtauthservice.executeJTWauth(username, this.state.password)
            .then(resp => {
                    console.log(resp.data);
                    const token = resp.data.token;
                    this.props.handleLogin(username,token);
                    this.props.history.push(`/home/${username}`);
                }
            )
            .catch(()=> {
                this.setState({isAuthenticated: false})
            })
        ;

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