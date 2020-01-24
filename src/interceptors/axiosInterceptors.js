import axios from "axios"

export const setupAxiosInterceptors = () => {

    let userLoggedInToken = window.localStorage.getItem("authenticatedUserToken");

    console.log("Interceptor token: " +userLoggedInToken);
    axios.interceptors.request.use((config) => {

        let basicHeader = `Bearer ` + userLoggedInToken;
        if(userLoggedInToken) {
            config.headers.authorization = basicHeader;
        }

        return config;
    })
};