import {takeLatest, put, call} from "redux-saga/effects"

import {login} from "../../api/auth";
import {loginFailed, loginSuccess} from "../actions/user-action";
import {LOGIN} from "../reducers/user-reducer";
import {setToken} from "../../utils/auth";

function* loginAPI(action){
    try{
        const response = yield call(login, {...action?.payload})
        if(response.status === 200){
            yield put(loginSuccess(response.data))
            setToken("response.data.token")
        }
        if(action.onSuccess){
            yield action.onSuccess()
        }
    }catch (e){
        yield put(loginFailed())
        if(action.onError){
            yield action.onError()
        }
    }
}

export function* watchLogin(){
    yield takeLatest(LOGIN, loginAPI)
}