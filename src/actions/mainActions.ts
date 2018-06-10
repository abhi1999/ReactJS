import axios from "axios";
import { LOAD_TLE_GRID, SIGNAL_TLE_GRID_LOAD_SUCCESS, LOAD_DATA, LOAD_ERROR } from './../constants';
import Notifications from "react-notification-system-redux";

const erroNotificationOptions ={
    title:'Service Error',
    message: '',
    position:'br',
    autoDismiss: 10
}

declare let Settings:any;

export const loadData= ()=>(dispatch, getState)=>{
    console.log('iamhere')
    dispatch(loadDataState());
    setTimeout(()=>{
        dispatch(loadDataSuccess())
        Notifications.success({title:'Hello world'});
        console.log('setTimeout')
    }, 5000)
}

export const loadDataSuccess= ()=>(dispatch, getState)=>{
    return {
        type:"LOAD_DATA_SUCESS",
        data: [{a:1, b:2}]
    }
}



export const loadTLEData= ()=>(dispatch, getState)=>{
    dispatch(loadDataState());
    let url = Settings.services.baseUrl + Settings.services.endpoints.tleData;
    return axios.get(url)
                .then((response)=>{
                    dispatch(loadTLEDataSuccess(response.data))
                })
                .catch((error)=>{
                    dispatch(loadDataError(error));
                    Notifications.error({
                        ...erroNotificationOptions,
                        message: Settings.services.endpoints.tleData +" :: " + error.message
                    })
                })
}

const loadTLEDataSuccess= (data)=>(dispatch, getState)=>{
    return {
        type: SIGNAL_TLE_GRID_LOAD_SUCCESS,
        data
    }
}

export const loadDataState= ()=>(dispatch, getState)=>{
    return {
        type: LOAD_DATA
    }
}

export const loadDataError= (error)=>(dispatch, getState)=>{
    return {
        type: LOAD_ERROR,
        error
    }
}

