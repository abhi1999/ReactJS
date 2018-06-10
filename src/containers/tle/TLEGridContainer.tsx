import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../actions/mainActions";
import TLEGrid from "./../../components/tle-grid/TLEGrid";

const mapStateToProps = (state) => {
    const {
        mainReducer:{
            loading, 
            tleData
        }
    }= state;
    let title ="Gird"
    return {
        title,
        loading, 
        tleData    
    }
}
const mapDispatchToProps = (dispatch) => {
    const {
        loadTLEData
    } = bindActionCreators(actionCreators, dispatch)
    return {
        loadTLEData
    }
}
const TLEGridContainer = connect(mapStateToProps, mapDispatchToProps)(TLEGrid);
export default TLEGridContainer;