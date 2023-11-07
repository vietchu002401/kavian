import axios from "axios"
import {getToken, removeToken} from "./auth";

const instance = axios.create({
    baseURL : process.env.REACT_APP_SERVER_URL,
    timeout : 360000,
    withCredentials : true,
    headers : {
        "Content-Type" : "application/json;charset=utf-8",
        "Accept": "*/*"
    }
})

instance.interceptors.request.use((config)=>{
    const token = getToken()
    if(token){
        config.headers["Authorization"] = `Bearer ${token}`
    }
    return config
}, (error)=>{
    return Promise.reject(error)
})

instance.interceptors.response.use((response)=>{
    return response;
},(error)=>{
    removeToken()
    return Promise.reject(error)
})

export default instance;