import * as React from "react";
import * as ReactDOM from "react-dom";
import Grid from './components/Grid';
import TLEMain from './components/tle-main/TLEMain';
import TLEGrid from './components/tle-grid/TLEGrid';

import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/theme-fresh.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardText, CardBody,CardHeader,
    CardTitle, CardSubtitle, Button } from 'reactstrap';


var Settings:any;

export default class App extends React.Component{

    render(){
        return (<div> 
            <TLEMain title="Transaction Lifecycle Explorer"/>
            <TLEGrid title="Transaction Lifecycle Explorer"/>
      </div>);
    }
}