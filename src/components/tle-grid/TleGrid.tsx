import * as  React from 'react';
import { Card, CardImg, CardText, CardBody,CardHeader,CardFooter,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import _ from 'lodash';
import {AgGridReact} from 'ag-grid-react';
import DateCellRenderer from './widgets/DateCellRenderer';
import { loadTLEData } from '../../actions/mainActions';

interface ITLEGridProps{
    title:string,
    tleData?:Array<any>,
    loadTLEData: ()=>{}
}

export default class TLEGrid extends React.Component<ITLEGridProps, any> {
    private gridAPI:any;
    constructor(props:ITLEGridProps, context:any) {
        super(props, context);
        this.state = {
            columnDefs: this.createColumnDefs()
        };
    }

    private createColumnDefs() {
        const columnDefs = [
            {
                headerName:"Partner",
                field:'partner'
            },
            {
                headerName:"Type",
                field:'type'
            },
            {
                headerName:"Direction",
                field:'direction'
            },
            {
                headerName:"Date Received",
                field:'dateReceived',
                filter: 'agDateColumnFilter',
                cellRendererFramework: DateCellRenderer
            },
            {
                headerName:"PO Number",
                field:'poNumber'
            },
            {
                headerName:"Report"
            },
            {
                headerName:"Data"
            }
        ];
        return columnDefs;
    }
    private refreshGrid(){
        this.props.loadTLEData();
    }
    componentWillReceiveProps(nextPros){
        if(this.gridAPI && nextPros && nextPros.tleData && nextPros.tleData.values)
            this.gridAPI.api.setRowData(nextPros.tleData.values)
    }
    private onGridReady(gridAPI){
        if (gridAPI === undefined) this.gridAPI = this.gridAPI.api;
        if(this.props.tleData && this.props.tleData.values)
            this.gridAPI.api.setRowData(this.props.tleData.values)  
    }
    render() {
        let gridConfig={
            enableSorting:true,
            enableFilter:true,
            columnDefs:this.state.columnDefs,
            onGridReady: this.onGridReady.bind(this)
           // rowData:this.props.tleData && this.props.tleData.values? this.props.tleData.values:[]
        }
        return (
            <Card>
                <CardHeader>{this.props.title}</CardHeader>
                <CardBody>
                    <CardTitle></CardTitle>
                    <CardSubtitle>
                        <Button onClick={this.refreshGrid.bind(this)}>Refresh</Button>
                    </CardSubtitle>
                    <div style={{height:"65vh"}}>
                        <div style={{height: '100%'}} className="ag-fresh">
                            <AgGridReact {...gridConfig}/>
                        </div>
                    </div>
                </CardBody>
                <CardFooter>Powered by Data Masons Software </CardFooter>
          </Card>
        );
    }

}