import * as React from "react";
import * as ReactDOM from "react-dom";

import {Provider} from "react-redux";
import configureStore from "./store/configureStore";

import App from './App'

import AppContainer from "./containers/AppContainer"
const store = configureStore();
ReactDOM.render(
    <Provider store={store}><AppContainer/></Provider>,
    document.getElementById('app')    
);

/*ReactDOM.render(
   <App/>,
    document.getElementById('app')
);
*/