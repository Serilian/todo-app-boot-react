import React, {Component} from 'react';
import "./Header.scss";
import {NavLink} from "react-router-dom";

class Header extends Component {


    render(){
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <p className="navbar-brand mx-0 my-0">TODO App</p>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {this.props.isUserLoggedIn && <li className="nav-item">
                                <NavLink activeClassName={"active"} className="nav-link" to="/home">Home </NavLink>
                            </li>}
                            {this.props.isUserLoggedIn && <li className="nav-item">
                                <NavLink activeClassName={"active"} className="nav-link" to="/todos">TodoList</NavLink>
                            </li>}
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            {!this.props.isUserLoggedIn && <li className="nav-item">
                                <NavLink className="nav-link" to={"/login"}>Login <span
                                    className="sr-only">(current)</span></NavLink>
                            </li>}
                            {this.props.isUserLoggedIn && <li className="nav-item">
                                <NavLink className="nav-link" to={"/logout"}>Logout</NavLink>
                            </li>}
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }

}

export default Header;