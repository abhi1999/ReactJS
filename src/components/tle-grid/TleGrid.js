import * as React from 'react';
import { Card, CardBody, CardHeader, CardFooter, CardTitle, CardSubtitle } from 'reactstrap';
import _ from 'lodash';
import { AgGridReact } from 'ag-grid-react';
import DateCellRenderer from './widgets/DateCellRenderer';
export default class TLEGrid extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            columnDefs: this.createColumnDefs(),
            rowData: this.createRowData()
        };
    }
    createRowData() {
        let rows = [];
        _.times(100, () => {
            rows.push({
                partner: 'A',
                type: "PO",
                direction: 'Outbound',
                dateReceived: new Date(),
                poNumber: '1112323'
            });
        });
        return rows;
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
        let gridConfig = {
            enableSorting: true,
            enableFilter: true,
            columnDefs: this.state.columnDefs,
            rowData: this.state.rowData
        };
        return (React.createElement(Card, null,
            React.createElement(CardHeader, null, this.props.title),
            React.createElement(CardBody, null,
                React.createElement(CardTitle, null),
                React.createElement(CardSubtitle, null),
                React.createElement("div", { style: { height: '100%' }, className: "ag-fresh" },
                    React.createElement(AgGridReact, Object.assign({}, gridConfig)))),
            React.createElement(CardFooter, null, "Powered by Data Masons Software ")));
    }
}
//# sourceMappingURL=TLEGrid.js.map