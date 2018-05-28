import * as constants from "./quiz.constants";

export const _INITIAL_STATE_ = {
  trivia_answers: [],
  current_index: 0
};

export default function (state: any = _INITIAL_STATE_, action: Function) {
  switch (action.type) {
    case constants.SAVE_ANSWER:
      return {
        ...state,
        trivia_answers: [...state.trivia_answers, {
          user_answer: action.option,
          isCorrect: action.isCorrectOption
        }],
        current_index: state.current_index + 1
      };
    case constants.RESET_CURRENT_INDEX:
      return {
        ...state,
        current_index: 0,
        trivia_answers: []
      };
    default:
      return state;
  }
}