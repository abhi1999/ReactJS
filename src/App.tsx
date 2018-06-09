import * as React from "react";
import * as ReactDOM from "react-dom";
import Grid from './components/Grid';

import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/theme-fresh.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TLEMain from './components/tle-main/TLEMain';
import TLEGrid from './components/tle-grid/TLEGrid';
import Sidebar from './components/tle-sidebar/Sidebar';
import Details from "./components/tle-details/Details";

//import './components/tle-sidebar/SidebarStyle.css'
import {BrowserRouter as Router, Link, Route} from "react-router-dom";


var Settings:any;

export default class App extends React.Component{

    render(){
        return (
            <Router>
                <div id="wrapper" className="toggled">
                    <Sidebar/>
                    <div id="page-content-wrapper">
                        <div className="container-fluid">
                            <Route exact={true} path="/" render={()=>{
                            return <TLEMain title="Transaction Lifecycle Explorer"/>
                            }}/>
                            <Route exact={true} path="/home" render={()=>{
                            return <TLEMain title="Transaction Lifecycle Explorer"/>
                            }}/>
                            <Route exact={true} path="/tlegrid" render={()=>{
                            return <TLEGrid title="Transaction Lifecycle Explorer"/>
                            }}/>
                            <Route exact={true} path="/details/:poOrderNumber" render={({match})=>{
                            return <Details title="Transaction Lifecycle Explorer"/>
                            }}/>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}