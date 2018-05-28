import * as constants from "./home.constants";
import homeApi from "./homeApi";

export function beginRequest(beginData: Object) {
  return dispatch => {
    dispatch(loadingRequest(true));

    homeApi
      .getTriviaQuestions(beginData)
      .then(response => {
        if (response.response_code === 0) {
          dispatch(beginSuccess(response.results));
        } else {
          dispatch(beginFailure('Sorry, something went wrong!'));
        }
      })
      .catch(error => {
        dispatch(beginFailure("Sorry, something went wrong: " + error));
      });
  };
}

export function beginSuccess(beginResponse: Object) {
  return {
    type: constants.BEGIN_SUCCESS,
    beginResponse,
    loadingIndicator: false,
    beginPressed: true
  };
}

export function beginFailure(error) {
  return {
    type: constants.BEGIN_FAILURE,
    loadingIndicator: false,
    beginPressed: false,
    errorMessage: error
  };
}

function loadingRequest(loadingIndicator: boolean) {
  return {
    type: constants.LOADING_REQUEST,
    loadingIndicator
  };
}

export function resetBeginPressedFlag() {
  return {
    type: constants.RESET_BEGIN_PRESSED_FLAG
  };
}

export function resetQuestions() {
  return {
    type: constants.RESET_QUESTIONS
  };
}