import lodash from "lodash";
import { LOAD_TLE_GRID, SIGNAL_TLE_GRID_LOAD_SUCCESS, LOAD_DATA, LOAD_ERROR } from './../constants';

const initialState = {
    loading:false, 
    data:[],
    tleData:[],
    date:null,
}

export const mainReducer = (state = initialState, action)=>{
    if(!action)
        return state;
    switch(action.type){
        case LOAD_DATA:
            return {
                ...state,
                loading:true
            }
        case SIGNAL_TLE_GRID_LOAD_SUCCESS:
            return {
                ...state,
                loading:false,
                tleData: action.data
            }
        default:
            return state;
    }
}

export default mainReducer;