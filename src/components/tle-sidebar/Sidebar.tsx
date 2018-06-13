import * as React from 'react';
import { Card, CardBody, CardHeader, CardFooter, CardTitle, CardSubtitle } from 'reactstrap';
import { Link} from "react-router-dom";

require ("./SidebarStyle.css");


export default class SideBar extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    public render() {
        return (
            <div id="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <li className="sidebar-brand">
                        <Link to={'/'}>HomePage </Link>
                    </li>
                    <li>
                        <Link to={'/tlegrid'}>Transaction Lifecycle Explorer </Link>
                    </li>
                    <li>
                        <Link to={'/details/11'}>Details </Link>
                    </li>
                </ul>
            </div>);
    }
}
