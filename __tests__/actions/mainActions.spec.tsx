import * as React from "react";
import * as axios from "axios";
import * as actionCreators from "./../../src/actions/mainActions";
import _ from "lodash";

import * as MockAdapter from "axios-mock-adapter";
import  { LOAD_TLE_GRID, SIGNAL_TLE_GRID_LOAD_SUCCESS, LOAD_DATA, LOAD_ERROR } from './../../src/constants';

import { tleGrid } from './../../__mocks__/serviceResponse';
import { Settings } from './../../__mocks__/mockSettings';
 
const mockAxios = new MockAdapter(axios);


describe('mainActions', ()=>{
    it('loads tle grd', ()=>{
        let url = Settings.services.baseUrl + Settings.services.endpoints.tleData;
        mockAxios.onGet(url).reply(200, tleGrid);
        //axios.get(url, {params:{items:_.random(100, 100)}})
        axios.get(url)
            .then((response)=>{
                expect(response.data).toEqual(tleGrid);
            })
        
    })
})
