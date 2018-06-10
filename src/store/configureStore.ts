import * as React from "react";
import  { compose, createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from "../reducers";

declare var require:any;
declare let process: any;
declare let module: any;

const configureStore =(preloadedState?:any)=>{
    
    let middleware = [promise(), ReduxThunk, createLogger()];

    /*const loggerMiddleware = createLogger({
        predicate: () => process.env.NODE_ENV === 'development',
      });
      */
    const store = createStore(
        rootReducer, 
        preloadedState,
        applyMiddleware(ReduxThunk)
        //composeWithDevTools(applyMiddleware(...middleware))
    )
/*
    if(module.hot){
        module.hot.accept("../reducers", ()=>{
            const nextRootReducer = require("../reducers");
            store.replaceReducer(nextRootReducer);
        })
    }*/
    return store;
}

export default configureStore;
/**
 *   const router = routerMiddleware(browserHistory)
  const store = createStore(
    rootReducer,
    getInitialState(),
    compose(
      applyMiddleware(thunk.withExtraArgument(api), router),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

 */