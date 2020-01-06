import React, {Component} from 'react';
import './App.css';
import Login from "./Login/Login";
import {Route, Switch} from "react-router-dom";
import Home from "./Home/Home";

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path={"/"} exact component={Login}/>
                    <Route path={"/home"} exact component={Home}/>
                </Switch>
            </div>
        );
    }
}

export default App;
