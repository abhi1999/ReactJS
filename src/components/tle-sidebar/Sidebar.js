import * as React from 'react';
import { Link } from "react-router-dom";
import "./SidebarStyle.css";
export default class SideBar extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement("div", { id: "sidebar-wrapper" },
            React.createElement("ul", { className: "sidebar-nav" },
                React.createElement("li", { className: "sidebar-brand" },
                    React.createElement(Link, { to: '/home' }, "HomePage ")),
                React.createElement("li", null,
                    React.createElement(Link, { to: '/tlegrid' }, "Transaction Lifecycle Explorer ")),
                React.createElement("li", null,
                    React.createElement(Link, { to: '/details/11' }, "Details ")))));
    }
}
//# sourceMappingURL=Sidebar.js.map