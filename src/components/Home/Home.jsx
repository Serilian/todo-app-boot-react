import React from 'react';
import {NavLink} from "react-router-dom";

const Home = (props) => {
    return (
        <div className={"container"}>
            <h1>{`Welcome!`}</h1>
            <p>Manage your todo list <NavLink to={"/todos"}>here</NavLink></p>
        </div>
    );
};

export default Home;