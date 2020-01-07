import React, {Component} from 'react';
import './App.css';
import Login from "./Login/Login";
import {Route, Switch} from "react-router-dom";
import Home from "./Home/Home";
import Error from "./Error/Error";
import TodoList from "./TODOList/TodoList";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Logout from "./Logout/Logout";

class App extends Component {

    render() {
        return (
            <div className="App">
                <Header/>
                <div className="content">
                    <Switch>
                        <Route path={"/"} exact component={Login}/>
                        <Route path={"/login"} exact component={Login}/>
                        <Route path={"/logout"} exact component={Logout}/>
                        <Route path={"/home/:name"} exact component={Home}/>
                        <Route path={"/home"} exact component={Home}/>
                        <Route path={"/todos"} exact component={TodoList}/>
                        <Route component={Error}/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
