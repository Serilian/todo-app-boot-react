import React from 'react';
import {NavLink} from "react-router-dom";

const Home = (props) => {
    return (
        <div>
            <h1>{`Welcome to awesome todo app ${props.match.params.name || ""}!`}</h1>
            <p><NavLink to={"/todos"}>Todo List</NavLink></p>
        </div>
    );
};

export default Home;