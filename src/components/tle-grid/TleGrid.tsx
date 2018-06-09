import * as  React from 'react';
import { Card, CardImg, CardText, CardBody,CardHeader,CardFooter,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import _ from 'lodash';
import {AgGridReact} from 'ag-grid-react';
import DateCellRenderer from './widgets/DateCellRenderer';

export default class TLEGrid extends React.Component {
    constructor(props:any, context:any) {
        super(props, context);

      
        this.state = {
            columnDefs: this.createColumnDefs(),
            rowData: this.createRowData()
        };
    }
    private createRowData(){
        let rows =[];
        _.times(100, ()=>{
            rows.push({
                partner:'A',
                type:"PO",
                direction:'Outbound',
                dateReceived: new Date(),
                poNumber: '1112323'
            })
        })
        return rows
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
    /*
        this.columnNames.forEach(colName => {
            columnDefs.push({
                headerName: colName.toUpperCase(),
                field: colName,
                width: 100
            });
        });
        */
        return columnDefs;
    }
    render() {
        let gridConfig={
            enableSorting:true,
            enableFilter:true,
            columnDefs:this.state.columnDefs,
            rowData:this.state.rowData
        }
        return (
            <Card>
                <CardHeader>{this.props.title}</CardHeader>
                <CardBody>
                    <CardTitle></CardTitle>
                    <CardSubtitle></CardSubtitle>
                    <div style={{height: '100%'}} className="ag-fresh">
                        <AgGridReact {...gridConfig}/>
                    </div>
                </CardBody>
                <CardFooter>Powered by Data Masons Software </CardFooter>
          </Card>
        );
    }

}