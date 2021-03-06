import React, {Component} from 'react';
import './App.css';
import Login from "./components/Login/Login";
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home";
import Error from "./components/Error/Error";
import TodoList from "./components/TODOList/TodoList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Logout from "./components/Logout/Logout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Todo from "./components/Todo/Todo";
import {setupAxiosInterceptors} from "./interceptors/axiosInterceptors";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isUserLoggedIn: false,
            todos: [],
            username: "",
            password: "",
            token: ""
        }
    }

    registerSuccessfulLogin = (username, token) => {
        console.log(username, token);
        localStorage.setItem("authenticatedUserToken", token);
        if (!this.state.isUserLoggedIn) {
            this.setState({
                isUserLoggedIn: true,
                token: token,
                username: username
            });

        }
        setupAxiosInterceptors(this.props.token);
    };

    registerLogout = () => {
        localStorage.removeItem("authenticatedUserToken");
        if (this.state.isUserLoggedIn) {
            this.setState({
                isUserLoggedIn: false
            });
        }
    };

    isUserLoggedIn = () => {
        return this.state.isUserLoggedIn;
    };

    componentDidMount() {
        if (this.isUserLoggedIn()) {
            this.props.history.push("/home");
        }
    }

    render() {
        return (
            <div className="App">
                <Header isUserLoggedIn={this.state.isUserLoggedIn}/>
                <div className="content">
                    <Switch>
                        <Route path={"/"} exact
                               render={(props) => (<Login handleLogin={this.registerSuccessfulLogin} {...props} />)}/>
                        <Route path={"/login"} exact
                               render={(props) => (<Login handleLogin={this.registerSuccessfulLogin} {...props} />)}/>
                        <Route path={"/logout"} exact
                               render={(props) => (<Logout handleLogout={this.registerLogout} {...props} />)}/>
                        <PrivateRoute isUserLoggedIn={this.isUserLoggedIn()} path={"/home/:name"} exact
                                      render={(props) => (<Home {...props} token={this.state.token}/>)}/>
                        <PrivateRoute isUserLoggedIn={this.isUserLoggedIn()} path={"/home"} exact
                                      render={(props) => (<Home {...props} token={this.state.token} />)}/>
                        <PrivateRoute isUserLoggedIn={this.isUserLoggedIn()} path={"/todos"} exact
                                      render={(props) => (<TodoList {...props} user={this.state.username} token={this.state.token}/>)}/>
                        <PrivateRoute isUserLoggedIn={this.isUserLoggedIn()} path={"/todos/:id"} exact
                                      render={(props) => (<Todo {...props} user={this.state.username} token={this.state.token}/>)}/>
                        <Route component={Error}/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
