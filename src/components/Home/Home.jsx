import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import axios from "axios";

const Home = () => {

    const [message, setMessage] = useState("");

    let getMessage = () => {

        axios.get("http://localhost:8080/hello-path/filip")
            .then(resp => setMessage(resp.data.message))
            .catch(error => {
                console.log(error);
                setMessage("Something went wrong : " + error.message);
            });
    };

    return (
        <div className={"container"}>
            <h1>{`Welcome!`}</h1>
            <p>Manage your todo list <NavLink to={"/todos"}>here</NavLink></p>
            <button onClick={() => getMessage()}>Get a message</button>
            <p>{message}</p>
        </div>
    );
};

export default Home;