import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/mainActions";
import App from "../components/App";

const mapStateToProps = (state) => {
    const {
        mainReducer:{
            data,
            loading, 
            date
        },
        notifications
    }= state;
    return {
        data,
        loading, 
        date,
        notifications
    }
}
const mapDispatchToProps = (dispatch) => {
    const {
        loadData,
        loadTLEData
    } = bindActionCreators(actionCreators, dispatch)
    return {
        loadData,
        loadTLEData
    }
}
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;