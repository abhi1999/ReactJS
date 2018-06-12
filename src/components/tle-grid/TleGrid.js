import * as React from 'react';
import { Card, CardBody, CardHeader, CardFooter, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { AgGridReact } from 'ag-grid-react';
import DateCellRenderer from './widgets/DateCellRenderer';
export default class TLEGrid extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            columnDefs: this.createColumnDefs()
        };
    }
    createColumnDefs() {
        const columnDefs = [
            {
                headerName: "Partner",
                field: 'partner'
            },
            {
                headerName: "Type",
                field: 'type'
            },
            {
                headerName: "Direction",
                field: 'direction'
            },
            {
                headerName: "Date Received",
                field: 'dateReceived',
                filter: 'agDateColumnFilter',
                cellRendererFramework: DateCellRenderer
            },
            {
                headerName: "PO Number",
                field: 'poNumber'
            },
            {
                headerName: "Report"
            },
            {
                headerName: "Data"
            }
        ];
        return columnDefs;
    }
    refreshGrid() {
        this.props.loadTLEData();
    }
    componentWillReceiveProps(nextPros) {
        if (this.gridAPI && nextPros && nextPros.tleData && nextPros.tleData.values)
            this.gridAPI.api.setRowData(nextPros.tleData.values);
    }
    onGridReady(gridAPI) {
        if (gridAPI !== undefined)
            this.gridAPI = gridAPI;
        if (this.gridAPI && this.props.tleData && this.props.tleData.values)
            this.gridAPI.api.setRowData(this.props.tleData.values);
    }
    render() {
        let gridConfig = {
            enableSorting: true,
            enableFilter: true,
            columnDefs: this.state.columnDefs,
            onGridReady: this.onGridReady.bind(this)
            // rowData:this.props.tleData && this.props.tleData.values? this.props.tleData.values:[]
        };
        return (React.createElement(Card, null,
            React.createElement(CardHeader, null, this.props.title),
            React.createElement(CardBody, null,
                React.createElement(CardTitle, null),
                React.createElement(CardSubtitle, null,
                    React.createElement(Button, { onClick: this.refreshGrid.bind(this) }, "Refresh")),
                React.createElement("div", { style: { height: "65vh" } },
                    React.createElement("div", { style: { height: '100%' }, className: "ag-fresh" },
                        React.createElement(AgGridReact, Object.assign({}, gridConfig))))),
            React.createElement(CardFooter, null, "Powered by Data Masons Software ")));
    }
}
//# sourceMappingURL=TleGrid.js.map