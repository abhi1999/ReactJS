import * as React from "react";
import  { compose, createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";
import promise from "redux-promise-middleware";
//import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from "../reducers";

declare var require:any;
declare let process: any;
declare let module: any;

const configureStore =(preloadedState?:any)=>{
    
    let middleware = [promise(), ReduxThunk, createLogger()];

    const store = createStore(
        rootReducer, 
        preloadedState,
        //applyMiddleware(ReduxThunk)
        //composeWithDevTools(applyMiddleware(...middleware))
        compose(applyMiddleware(...middleware))
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