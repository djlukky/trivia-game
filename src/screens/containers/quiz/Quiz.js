import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { QuizComponent } from "./components/QuizComponent";
import * as networkActions from '../../../network/networkActions';
import * as quizActions from './quizActions';

function mapStateToProps(state) {
    return {
        trivia_questions: state.homeReducers.trivia_questions,
        current_index: state.quizReducers.current_index
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateConnectionStatus: networkActions.updateConnectionStatus,
        saveAnswerAndEvaluate: quizActions.saveAnswerAndEvaluate,
        resetCurrentIndex: quizActions.resetCurrentIndex
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizComponent);