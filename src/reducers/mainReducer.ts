import lodash from "lodash";

const initialState = {
    loading:false
}

export const mainReducer = (state = initialState, action)=>{
    if(!action)
        return state;
    
    switch(action.type){
        case "LOAD_DATA":
            return {
                ...state,
                loading:true
            }
        case "LOAD_DATA_SUCCESS":
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