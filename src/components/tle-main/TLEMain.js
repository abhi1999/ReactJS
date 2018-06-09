import * as React from 'react';
import { Card, CardBody, CardHeader, CardFooter, CardTitle, CardSubtitle } from 'reactstrap';
export default class TLEMain extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(Card, null,
            React.createElement(CardHeader, null, this.props.title),
            React.createElement(CardBody, null,
                React.createElement(CardTitle, null),
                React.createElement(CardSubtitle, null),
                React.createElement("div", null, "place holder for nav buttons")),
            React.createElement(CardFooter, null, "Powered by Data Masons Software ")));
    }
}
//# sourceMappingURL=TLEMain.js.map