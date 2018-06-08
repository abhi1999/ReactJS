import * as  React from 'react';

import {AgGridReact} from 'ag-grid-react';
import SimpleCellRenderer from './SimpleCellRenderer'
// put this line in to use ag-Grid enterprise
// import 'ag-grid-enterprise';

export default class Grid extends React.Component {
    private columnNames:any;
    
    constructor(props:any, context:any) {
        super(props, context);

        this.createColumnNames();

        this.state = {
            columnDefs: this.createColumnDefs(),
            rowData: this.createRowData()
        };
    }

    createColumnNames() {
        // creates column names by iterating the alphabet twice, eg {'aa','ab','ac',.....'zz'}
        const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        this.columnNames = [];
        alphabet.forEach(letter1 => {
            alphabet.forEach(letter2 => {
                this.columnNames.push(letter1 + letter2);
            });
        });
    }

    createRowData() {
        const rowData = [];

        for (let i = 0; i < 1000; i++) {
            const item = {};
            this.columnNames.forEach(colName => {
                item[colName] = '(' + colName.toUpperCase() + ',' + i + ')'
            });
            rowData.push(item);
        }

        return rowData;
    }

    createColumnDefs() {
        const columnDefs = [];

        this.columnNames.forEach(colName => {
            columnDefs.push({
                headerName: colName.toUpperCase(),
                field: colName,
                cellRendererFramework: SimpleCellRenderer,
                width: 100
            });
        });

        return columnDefs;
    }

    render() {
        return (
            <div style={{height: '100%'}} className="ag-fresh">
                <AgGridReact columnDefs={this.state.columnDefs} rowData={this.state.rowData}/>
            </div>
        );
    }

}