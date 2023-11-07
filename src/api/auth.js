import request from "../utils/request"

export const login = (payload)=>{
    return request({
        url : "/posts",
        method : "GET",
        data : payload
    })
}