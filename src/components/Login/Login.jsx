import React, {useState} from 'react';
import "./Login.scss";


const Login = ({location, history}) => {

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
            let atIndex = email.indexOf("@");
            history.push(`/home/${email.substring(0, atIndex)}`);
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
        }} className={"container"}>
            {!isAuthenticated && <h1>Please log in</h1>}
            {isAuthenticated && <h3>Login successful</h3>}
            {(isAuthenticated !== null && !isAuthenticated) && <h3 className={"alert alert-danger"}>Login failed</h3>}
            <form>
                <div className={"form-group"}>
                    <label htmlFor="email">Email</label>
                    <input id={"email"} name={"email"} value={email} onChange={handleChange} placeholder={"email"}/>
                </div>
                <div className={"form-group"}>
                    <label htmlFor="password">Password</label>
                    <input id={"password"} name={"password"} value={password}
                           onChange={handleChange} type={"password"}
                           placeholder={"password"}/>
                </div>
                <input className={"btn btn-success"} type={"submit"} value={"Submit"} onClick={handleSubmit}/>
            </form>
        </div>
    );
};

export default Login;