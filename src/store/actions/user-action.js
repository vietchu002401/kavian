import {LOGIN, LOGIN_FAILED, LOGIN_SUCCESS} from "../reducers/user-reducer";

export const login = (payload, onSuccess, onFailed)=>({
    type : LOGIN,
    payload,
    onSuccess,
    onFailed
})

export const loginSuccess = (payload)=>({
    type : LOGIN_SUCCESS,
    payload
})

export const loginFailed = ()=>({
    type : LOGIN_FAILED
})

