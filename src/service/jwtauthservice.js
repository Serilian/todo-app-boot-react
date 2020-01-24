import axios from "axios";

class Jwtauthservice {

    executeJTWauth(username, password) {
        console.log(username, password);
        return axios.post("/authenticate",{
            username,
            password
        })
    }

}

export default new Jwtauthservice();