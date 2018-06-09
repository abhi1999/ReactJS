import {combineReducers} from "redux";
import mainReducer from "./mainReducer";
import {reducer as notifications} from "react-notification-system-redux";

const appReducer = combineReducers({
    mainReducer, 
    notifications
})

const rootReducer = (state, action)=>{
    if(action.type === "CANCEL"){
        state = undefined;
    }
    return appReducer(state, action)
}

export default rootReducer;