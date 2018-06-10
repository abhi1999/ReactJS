import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Notifications from "react-notification-system";

import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/theme-fresh.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TLEMain from './tle-main/TLEMain';
import TLEGrid from './tle-grid/TLEGrid';
import Sidebar from './tle-sidebar/Sidebar';
import TLEDetails from "./tle-details/TLEDetails";

import {BrowserRouter as Router, Link, Route} from "react-router-dom";


declare let Settings:any;
interface IAppProps{
    loading:boolean,
    loadData:()=>{},
    notifications:any
}
export default class App extends React.Component<IAppProps, any>{
    constructor(props:IAppProps){
        super(props);
    }
    componentDidMount(){
        this.props.loadData();
    }
    componentWillReceiveProps(nextProps){
        console.log('next props' ,nextProps);
        console.log('this props' ,this.props);
    }
    render(){
        const defaultStyle ={
            NotificationItem:{
                DefaultStyle:{
                    margin:"10px, 5px, 2px, 1px"
                }
            }
        }
        console.log('APP', this.props)
        return (
            <Router>
                <div id="wrapper" className="toggled">
                    <Sidebar/>
                    <div id="page-content-wrapper">
                        <div className="container-fluid">
                            <Route exact={true} path="/" render={()=>{
                            return <TLEMain title={Settings.appTitle}/>
                            }}/>
                            <Route exact={true} path="/home" render={()=>{
                            return <TLEMain title={Settings.appTitle}/>
                            }}/>
                            <Route exact={true} path="/tlegrid" render={()=>{
                            return <TLEGrid title={Settings.appTitle}/>
                            }}/>
                            <Route exact={true} path="/details/:poOrderNumber" render={({match})=>{
                            return <TLEDetails title={Settings.appTitle}/>
                            }}/>
                        </div>
                    </div>
                    <Notifications notification={this.props.notifications} style={defaultStyle} />
                </div>
            </Router>
        );
    }
}