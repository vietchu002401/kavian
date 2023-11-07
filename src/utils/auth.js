import Cookies from "js-cookie"

const TOKEN = "TOKEN"

export const setToken = (token)=>{
    Cookies.set(TOKEN, token, {expires : 1})
}

export const getToken = ()=>{
    return Cookies.get(TOKEN)
}

export const removeToken = ()=>{
    Cookies.remove(TOKEN)
}