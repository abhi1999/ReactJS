import * as React from 'react';
//import * as PropTypes from 'prop-types';
export default class DateCellRenderer extends React.Component {
    render() {
        // the class below does nothing, it's just for testing, so we can inspect the dom of
        // the result and looking for it, to validate that this cellRenderer is actually getting used.
        return (React.createElement("span", { className: "simple-cell-renderer" }, this.props.value.toLocaleString()));
    }
}
//# sourceMappingURL=DateCellRenderer.js.map