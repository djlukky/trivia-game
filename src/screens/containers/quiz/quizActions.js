import * as constants from "./quiz.constants";

export function saveAnswerAndEvaluate(option: String, isCorrectOption: boolean) {
  return {
    type: constants.SAVE_ANSWER,
    option,
    isCorrectOption
  }
}

export function resetCurrentIndex() {
  return {
    type: constants.RESET_CURRENT_INDEX
  };
}

