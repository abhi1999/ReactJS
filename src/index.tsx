import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux"
//import configureStore from "./store/configureStore"

//const store = configureStore()
ReactDOM.render(<Provider><div> Hello World</div></Provider>, document.getElementById('app'));