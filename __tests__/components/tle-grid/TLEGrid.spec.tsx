
import * as enzyme from "enzyme"; 
//import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import renderer from "react-test-renderer";
import TLEGrid from './../../../src/components/tle-grid/TLEGrid';

import * as React from 'react';
import { Card, CardImg, CardText, CardBody,CardHeader,CardFooter,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
//enzyme.configure({ adapter: new Adapter() });

describe("Side bar componet", ()=>{
    let wrapper;
    let props ={title:'This is Title'};
    beforeEach(()=>{
        enzyme.configure({ adapter: new Adapter() });
        wrapper = enzyme.shallow(<TLEGrid {...props}/>)
    })

    it("Should render CardTitle", ()=>{
        expect(wrapper.find('.ag-fresh').length).toBe(1);
    })
    
})