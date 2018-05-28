import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {HomeComponent} from "./components/HomeComponent";
import * as networkActions from '../../../network/networkActions';
import * as homeActions from './homeActions';
import * as resultsActions from '../results/resultsActions';

function mapStateToProps(state) {
    return {
      beginPressed: state.homeReducers.beginPressed,
      loadingIndicator: state.homeReducers.loadingIndicator
    };
  }
  
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateConnectionStatus: networkActions.updateConnectionStatus,
        beginRequest: homeActions.beginRequest,
        resetBeginPressedFlag: homeActions.resetBeginPressedFlag,
        resetPlayAgainPressed: resultsActions.resetPlayAgainPressed
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);