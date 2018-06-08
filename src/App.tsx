import * as React from "react";
import * as ReactDOM from "react-dom";
import Grid from './components/Grid';

import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/theme-fresh.css';

export default class App extends React.Component{

    render(){
        return <div>Hello World<Grid/></div>
    }
}