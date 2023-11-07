import React from "react"
import {getToken} from "../../utils/auth";
import {Navigate, Outlet, useLocation} from "react-router-dom";

const AuthenticationChecking = ()=>{
    const location = useLocation()
    const token = getToken()
    if(!token){
        // redirect to login page when no token be found
        return <Navigate to="/login" state={{from : location}} replace />
    }

    return <Outlet/>
}

export default AuthenticationChecking;