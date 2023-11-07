import React from "react"
import {useDispatch} from "react-redux";
import {toastErrorMessage, toastSuccessMessage} from "../../utils/notifications";
import {login} from "../../store/actions/user-action";
import {Navigate, useNavigate} from "react-router-dom";
import {getToken} from "../../utils/auth";

const LoginPage = ()=>{
    const token = getToken()
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handleLogin = ()=>{
        const data = {
            username : "",
            password : ""
        }
        const onSuccess = ()=>{
            toastSuccessMessage("login success")
            navigate({
                pathname : "/admin"
            })
        }
        const onError = ()=>{
            toastErrorMessage("login failed")
        }
        dispatch(login(data, onSuccess, onError))
    }

    if(token){
        return <Navigate to="/admin"/>
    }

    return (
        <div>
            <button onClick={handleLogin}>Fake login button</button>
        </div>
    )
}

export default LoginPage;