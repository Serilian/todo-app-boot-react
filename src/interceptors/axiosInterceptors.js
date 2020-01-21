import axios from "axios"

export const setupAxiosInterceptors = (user, password) => {

    let userLoggedIn = window.localStorage.getItem("authenticatedUser");

    axios.interceptors.request.use((config) => {

        let basicHeader = `Basic ` + window.btoa(user + ":" + password);
        if(userLoggedIn) {
            config.headers.authorization = basicHeader;
        }

        return config;
    })
};