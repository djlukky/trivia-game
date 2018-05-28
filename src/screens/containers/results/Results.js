import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {ResultsComponent} from "./components/ResultsComponent";
import * as networkActions from '../../../network/networkActions';
import * as resultsActions from './resultsActions';
import * as quizActions from '../quiz/quizActions';
import * as homeActions from '../home/homeActions';

function mapStateToProps(state) {
    return {
      trivia_questions: state.homeReducers.trivia_questions,
      trivia_answers: state.quizReducers.trivia_answers,
      playAgainPressed: state.resultsReducers.playAgainPressed
    };
  }
  
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateConnectionStatus: networkActions.updateConnectionStatus,
        playAgainRequest: resultsActions.playAgainRequest,
        resetCurrentIndex: quizActions.resetCurrentIndex,
        resetQuestions: homeActions.resetQuestions,
        resetBeginPressedFlag: homeActions.resetBeginPressedFlag
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsComponent);