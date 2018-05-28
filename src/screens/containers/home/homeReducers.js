import * as constants from "./home.constants";

export const _INITIAL_STATE_ = {
  loadingIndicator: false,
  beginPressed: false,
  trivia_questions: [],
  error: ''
};

export default function (state: any = _INITIAL_STATE_, action: Function) {
  switch (action.type) {
    case constants.BEGIN_SUCCESS:
      return {
        ...state,
        loadingIndicator: action.loadingIndicator,
        beginPressed: action.beginPressed,
        trivia_questions: action.beginResponse
      };
    case constants.BEGIN_FAILURE:
      return {
        ...state,
        loadingIndicator: action.loadingIndicator,
        beginPressed: action.beginPressed,
        error: action.errorMessage
      };
    case constants.LOADING_REQUEST:
      return {
        ...state,
        loadingIndicator: action.loadingIndicator
      };
    case constants.RESET_BEGIN_PRESSED_FLAG:
      return {
        ...state,
        beginPressed: false
      };
    case constants.RESET_QUESTIONS:
      return {
        ...state,
        trivia_questions: []
      };
    default:
      return state;
  }
}