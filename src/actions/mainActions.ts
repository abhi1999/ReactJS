import axios from "axios";

export const loadData= ()=>(dispatch, getState)=>{
    dispatch(loadDataState());
    setTimeout(()=>{
        dispatch(loadDataSuccess())
    }, 5000)
}

export const loadDataState= ()=>(dispatch, getState)=>{
    return {
        type:"LOAD_DATA"
    }
}

export const loadDataSuccess= ()=>(dispatch, getState)=>{
    return {
        type:"LOAD_DATA_SUCESS",
        data: [{a:1, b:2}]
    }
}