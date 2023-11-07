export const LOGIN = "LOGIN"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILED = "LOGIN_FAILED"

let initialState = {
    loading : false,
    username : "",
}

const userReducer = (state = initialState, action)=>{
    const { payload, type } = action
    switch (type){
        case LOGIN:
            return{
                ...state,
                loading : true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                username : payload,
                loading : false
            }
        case LOGIN_FAILED:
            return {
                ...state,
                loading : false,
                username : ""
            }
        default:
            return {
                ...state
            }
    }
}

export default userReducer;