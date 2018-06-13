
import * as enzyme from "enzyme"; 
//import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import renderer from "react-test-renderer";
import Sidebar from './../../src/components/tle-sidebar/Sidebar';

import * as React from 'react';

//enzyme.configure({ adapter: new Adapter() });

describe("Side bar componet", ()=>{
    let wrapper;
    beforeEach(()=>{
        enzyme.configure({ adapter: new Adapter() });
        wrapper = enzyme.shallow(<Sidebar/>)
    })

    it("Should render Sidebar with nav", ()=>{
        expect(wrapper.find('.sidebar-nav').length).toBe(1);
    })
    
})