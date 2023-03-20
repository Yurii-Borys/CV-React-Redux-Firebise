import {
    applyMiddleware,
    combineReducers,
    createStore
} from "redux";
import {
    composeWithDevTools
} from 'redux-devtools-extension'
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import notificationReducer from "./notificationReducer";

const rootReducer = combineReducers({
    user: userReducer,
    notification: notificationReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))