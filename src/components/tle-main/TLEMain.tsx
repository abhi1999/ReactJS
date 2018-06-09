import * as  React from 'react';
import { Card, CardImg, CardText, CardBody,CardHeader,CardFooter,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class TLEMain extends React.Component {
    constructor(props:any, context:any) {
        super(props, context);
 }

    render() {
        return (
            <Card>
                <CardHeader>{this.props.title}</CardHeader>
                <CardBody>
                    <CardTitle></CardTitle>
                    <CardSubtitle></CardSubtitle>
                    <div>
                        place holder for nav buttons
                    </div>
                </CardBody>
                <CardFooter>Powered by Data Masons Software </CardFooter>
          </Card>
        );
    }

}