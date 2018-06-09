import * as React from "react";
import  {compose, createStore, applyMiddleware} from "redux";
import * as logger from "redux-logger";
import ReduxThunk from "redux-thunk";
import rootReducer from "../reducers";

declare var require:any;
declare let process: any;
declare let module: any;

const configureStore =(preloadedState?:any)=>{

    let middleware = [ReduxThunk, logger()];
    const store = createStore(
        rootReducer, 
        preloadedState,
        compose(applyMiddleware.apply(null, middleware))
    )

    if(module.hot){
        module.hot.accept("../reducers", ()=>{
            const nextRootReducer = require("../reducers");
            store.replaceReducer(nextRootReducer);
        })
    }
    return store;
}

export default configureStore;