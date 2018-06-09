import * as React from 'react';
import { Card, CardBody, CardHeader, CardFooter, CardTitle, CardSubtitle } from 'reactstrap';

export default class Details extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    public render() {
        return (
            <Card>
                <CardHeader>{this.props.title}</CardHeader>
                <CardBody>
                    <CardTitle></CardTitle>
                    <CardSubtitle></CardSubtitle>
                    <div>
                      Details will go heres
                    </div>
                </CardBody>
                <CardFooter>Powered by Data Masons Software </CardFooter>
          </Card>);
    }
}
