import lodash from "lodash";
import { LOAD_TLE_GRID, SIGNAL_TLE_GRID_LOAD_SUCCESS, LOAD_DATA, LOAD_ERROR } from './../constants';

const initialState = {
    loading:false, 
    data:[],
    date:null,
}

export const mainReducer = (state = initialState, action)=>{
    if(!action)
        return state;
    console.log(action);
    switch(action.type){
        case LOAD_DATA:
            return {
                ...state,
                loading:true
            }
        case "LOAD_DATA_SUCESS":
            return {
                ...state,
                loading:false,
                data: action.data
            }
        default:
            return state;
    }
}

export default mainReducer;