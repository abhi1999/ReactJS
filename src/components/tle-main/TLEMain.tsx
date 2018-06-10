import * as  React from 'react';
import { Card, CardImg, CardText, CardBody,CardHeader,CardFooter,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

interface ITLEMainProps{
    title:string
}
export default class TLEMain extends React.Component<ITLEMainProps, any> {
    constructor(props:ITLEMainProps, context:any) {
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
                        and image
                        
                        place holder for nav buttons
                    </div>
                </CardBody>
                <CardFooter>Powered by Data Masons Software </CardFooter>
          </Card>
        );
    }

}