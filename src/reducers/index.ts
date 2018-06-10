import { combineReducers } from "redux";
import mainReducer from "./mainReducer";
import { reducer as notifications } from "react-notification-system-redux";

const appReducer = combineReducers({
    mainReducer: mainReducer, 
    notifications: notifications
})
export default appReducer;
/*
const rootReducer = (state, action)=>{
    if(action.type === "CANCEL"){
        state = undefined;
    }
    return appReducer(state, action)
}

export default rootReducer;
*/