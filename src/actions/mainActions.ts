import axios from "axios";
import _ from "lodash";

import { LOAD_TLE_GRID, SIGNAL_TLE_GRID_LOAD_SUCCESS, LOAD_DATA, LOAD_ERROR } from './../constants';
import Notifications from 'react-notification-system-redux';

declare let Settings:any;
 
const erroNotificationOptions ={
    title:'Service Error',
    message: '',
    position:'br',
    autoDismiss: 10
}

export const loadTLEData= ()=>(dispatch, getState)=>{
    dispatch(loadDataState());
    let url = Settings.services.baseUrl + Settings.services.endpoints.tleData;
    return axios.get(url, {params:{items:_.random(100, 100)}})
                .then((response)=>{
                    dispatch(loadTLEDataSuccess(response.data))
                })
                .catch((error)=>{
                    dispatch(loadDataError(error));
                    dispatch(Notifications.error({
                        ...erroNotificationOptions,
                        message: Settings.services.endpoints.tleData +" :: " + error.message
                    }));
                })
}

const loadTLEDataSuccess= (data)=>{
    return {
        type: SIGNAL_TLE_GRID_LOAD_SUCCESS,
        data
    }
}

const loadDataState = ()=>{
    return {
        type: LOAD_DATA
    }
}

const loadDataError = (error)=>{
    return {
        type: LOAD_ERROR,
        error
    }
}

