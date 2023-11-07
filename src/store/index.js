import {combineReducers, applyMiddleware, createStore} from "redux";
import rootSaga from "./root-saga";
import createSagaMiddleware from "redux-saga"
import userReducer from "./reducers/user-reducer";

const rootReducer = combineReducers({
    userReducer
})

const middlewares = []
const sagaMiddleware = createSagaMiddleware()

middlewares.push(sagaMiddleware)

const store = createStore(rootReducer, applyMiddleware(...middlewares))
sagaMiddleware.run(rootSaga)

export default store;