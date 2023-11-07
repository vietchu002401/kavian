import {all} from "redux-saga/effects"
import {watchLogin} from "./sagas/user-saga";

export default function* rootSaga(){
    yield all([
        watchLogin()
    ])
}