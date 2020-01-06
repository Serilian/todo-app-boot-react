import React, {useState} from 'react';
import "./Login.scss";
import {withRouter} from "react-router-dom";

const Login = ({location, history, }) => {

    const [userData, setData] = useState({
        name: "",
        password: "",
        isAuthenticated: null
    });

    const {isAuthenticated, email, password} = userData;

    const handleChange = e => {
        const {name, value} = e.target;
        setData({
            ...userData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "fhagno@yahoo.com" && password === "test123") {
            setData({
                ...userData,
                isAuthenticated: true
            });
            history.push("/home");
        } else {
            setData({
                ...userData,
                isAuthenticated: false
            });
        }
    };

    return (
        <div style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
            {!isAuthenticated && <h1>Please log in</h1>}
            {isAuthenticated && <h3>Login successful</h3>}
            {(isAuthenticated !== null && !isAuthenticated) && <h3>Login failed</h3>}
            <form>
                <input id={"email"} name={"email"} value={email} onChange={handleChange} placeholder={"email"}/>
                <input id={"password"} name={"password"} value={password} onChange={handleChange} type={"password"}
                       placeholder={"password"}/>
                <input className={"submit"} type={"submit"} value={"Submit"} onClick={handleSubmit}/>
            </form>
        </div>
    );
};

export default withRouter(Login);